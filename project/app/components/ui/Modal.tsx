"use client";

import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const FOCUSABLE =
  'a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled]), select:not([disabled]), video[controls], [tabindex]:not([tabindex="-1"])';

type ModalProps = {
  open: boolean;
  onClose: () => void;
  label: string;
  size?: "video" | "image";
  children: React.ReactNode;
};

/** Dialog dengan fokus terkunci, Esc, klik latar, dan fokus kembali. */
export function Modal({ open, onClose, label, size = "video", children }: ModalProps) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const returnFocus = useRef<HTMLElement | null>(null);
  const closeRef = useRef(onClose);
  closeRef.current = onClose;

  useEffect(() => {
    if (!open) return;

    returnFocus.current = document.activeElement as HTMLElement | null;
    const main = document.getElementById("main");
    const header = document.querySelector("header");
    main?.setAttribute("inert", "");
    header?.setAttribute("inert", "");
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const dialog = dialogRef.current;
    (dialog?.querySelector<HTMLElement>(FOCUSABLE) ?? dialog)?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        closeRef.current();
        return;
      }
      if (event.key !== "Tab" || !dialog) return;

      const nodes = Array.from(dialog.querySelectorAll<HTMLElement>(FOCUSABLE)).filter(
        (node) => node.offsetParent !== null
      );
      if (nodes.length === 0) {
        event.preventDefault();
        return;
      }
      if (event.shiftKey && document.activeElement === nodes[0]) {
        event.preventDefault();
        nodes[nodes.length - 1].focus();
      } else if (!event.shiftKey && document.activeElement === nodes[nodes.length - 1]) {
        event.preventDefault();
        nodes[0].focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
      main?.removeAttribute("inert");
      header?.removeAttribute("inert");
      returnFocus.current?.focus();
    };
  }, [open]);

  if (!open || typeof document === "undefined") return null;

  return createPortal(
    <div
      className="modal"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-label={label}
        tabIndex={-1}
        className={`modal__dialog modal__dialog--${size}`}
      >
        <button type="button" className="modal__close" onClick={onClose} aria-label="Tutup">
          ×
        </button>
        {children}
      </div>
    </div>,
    document.body
  );
}
