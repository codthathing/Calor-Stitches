import { useState, useRef, useEffect } from "react";

export const useVideoControl = () => {
  const [videoControls, setVideoControls] = useState({ showAside: true, showPlayer: false, showControl: false, currentControl: false });
  const { showAside, showPlayer, showControl, currentControl } = videoControls;
  const videoContainer = useRef();

  const handleShowControl = () => {
    setVideoControls(state => ({ ...state, showControl: true }));
    setTimeout(() => {
      setVideoControls(state => ({ ...state, showControl: false }));
    }, 5000);
  };

  const playVideo = () => {
    videoContainer.current.play();
    setVideoControls(state => ({ ...state, showAside: false }));
    handleShowControl();
  };

  const controlVideo = () => {
    if (currentControl) {
      videoContainer.current.pause();
    } else {
      videoContainer.current.play();
    };
    handleShowControl();
  };

  useEffect(() => {
    videoContainer.current.addEventListener("play", () => setVideoControls(state => ({ ...state, currentControl: true })));
    videoContainer.current.addEventListener("pause", () => setVideoControls(state => ({ ...state, currentControl: false })));
    videoContainer.current.addEventListener("ended", () => {
      videoContainer.current.currentTime = 0;
      videoContainer.current.load();
      setVideoControls(state => ({ ...state, showAside: true, showPlayer: false }));
    });

    return () => {
      videoContainer.current.removeEventListener("play", () => setVideoControls(state => ({ ...state, currentControl: true })));
      videoContainer.current.removeEventListener("pause", () => setVideoControls(state => ({ ...state, currentControl: false })));
      videoContainer.current.removeEventListener("ended", () => {
        videoContainer.current.currentTime = 0;
        videoContainer.current.load();
        setVideoControls(state => ({ ...state, showAside: true, showPlayer: false }));
      });
    };
  }, [])

  return { showAside, showPlayer, showControl, currentControl, videoContainer, setVideoControls, playVideo, controlVideo }
};