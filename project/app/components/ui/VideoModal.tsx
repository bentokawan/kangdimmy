"use client";

import type { MentoringVideo } from "../../lib/site";
import { Modal } from "./Modal";

export function VideoModal({
  video,
  open,
  onClose,
}: {
  video: MentoringVideo;
  open: boolean;
  onClose: () => void;
}) {
  return (
    <Modal open={open} onClose={onClose} label={`Video sekilas mentoring, ${video.duration}`}>
      {open && (
        <video
          className="modal__video"
          src={video.src}
          poster={video.poster}
          controls
          autoPlay
          playsInline
          preload="metadata"
        />
      )}
      {video.transcript && (
        <p className="modal__caption text-[#3A3A3A]">{video.transcript}</p>
      )}
    </Modal>
  );
}
