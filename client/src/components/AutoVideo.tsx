import { useEffect, useRef, useState } from "react";

type AutoVideoProps = {
  src: string;
  poster: string;
  label: string;
};

/**
 * Беззвучное фоновое видео, которое не оставляет пустого места.
 * - под видео всегда лежит постер (картинка), поэтому при любом сбое видна фотография;
 * - muted/playsinline выставляются и как свойства, и как атрибуты (iOS Safari, WeChat/X5, MIUI, UC);
 * - если браузер заблокировал автозапуск (экономия трафика, энергосбережение), видео стартует по первому касанию;
 * - вне экрана видео ставится на паузу, чтобы не тратить батарею.
 */
export default function AutoVideo({ src, poster, label }: AutoVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;
    video.setAttribute("muted", "");
    video.setAttribute("playsinline", "");
    video.setAttribute("webkit-playsinline", "true");
    video.setAttribute("x5-playsinline", "true");

    let visible = true;
    const tryPlay = () => {
      if (!visible || !video.paused) return;
      const result = video.play();
      if (result && typeof result.catch === "function") result.catch(() => {});
    };

    const onPlaying = () => setIsPlaying(true);
    const onVisibility = () => {
      if (document.hidden) video.pause();
      else tryPlay();
    };
    const unlockEvents = ["touchstart", "touchend", "pointerdown", "click", "keydown"] as const;
    const onUserGesture = () => tryPlay();

    video.addEventListener("playing", onPlaying);
    video.addEventListener("canplay", tryPlay);
    document.addEventListener("visibilitychange", onVisibility);
    unlockEvents.forEach((name) =>
      window.addEventListener(name, onUserGesture, { passive: true }),
    );

    let observer: IntersectionObserver | undefined;
    if ("IntersectionObserver" in window) {
      observer = new IntersectionObserver(([entry]) => {
        visible = entry.isIntersecting;
        if (visible) tryPlay();
        else video.pause();
      });
      observer.observe(video);
    }

    tryPlay();

    return () => {
      video.removeEventListener("playing", onPlaying);
      video.removeEventListener("canplay", tryPlay);
      document.removeEventListener("visibilitychange", onVisibility);
      unlockEvents.forEach((name) => window.removeEventListener(name, onUserGesture));
      observer?.disconnect();
    };
  }, []);

  return (
    <>
      <img className="media-poster" src={poster} alt="" aria-hidden="true" decoding="async" />
      <video
        ref={videoRef}
        className={`media-video${isPlaying ? " is-playing" : ""}`}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        poster={poster}
        aria-label={label}
      >
        <source src={src} type="video/mp4" />
      </video>
    </>
  );
}
