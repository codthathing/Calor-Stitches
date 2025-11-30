"use client";
import { useState, useRef, useEffect } from "react";

export const useVideoControl = () => {
  const [videoControls, setVideoControls] = useState({ showAside: true, showPlayer: false, showControl: false, currentControl: false });
  const { showAside, showPlayer, showControl, currentControl } = videoControls;
  const videoContainer = useRef<HTMLVideoElement | null>(null);

  const handleShowControl = () => {
    setVideoControls(state => ({ ...state, showControl: true }));
    setTimeout(() => {
      setVideoControls(state => ({ ...state, showControl: false }));
    }, 5000);
  };

  const playVideo = () => {
    if (videoContainer.current) videoContainer.current.play();
    setVideoControls(state => ({ ...state, showAside: false }));
    handleShowControl();
  };

  const controlVideo = () => {
    if (currentControl) {
      if (videoContainer.current) videoContainer.current.pause();
    } else {
      if (videoContainer.current) videoContainer.current.play();
    };
    handleShowControl();
  };

  useEffect(() => {
    const videoElement = videoContainer.current;
    
    if (!videoElement) return;

    const handlePlay = () => {
      setVideoControls(state => ({ ...state, currentControl: true }));
      handleShowControl();
    };
    
    const handlePause = () => {
      setVideoControls(state => ({ ...state, currentControl: false }));
      if(videoElement.currentTime !== videoElement.duration) handleShowControl();
    };
    
    const handleEnded = () => {
      videoElement.currentTime = 0;
      videoElement.load();
      setVideoControls(state => ({ ...state, showAside: true, showPlayer: false, showControl: false }));
    };

    videoElement.addEventListener("play", handlePlay);
    videoElement.addEventListener("pause", handlePause);
    videoElement.addEventListener("ended", handleEnded);

    return () => {
      if (videoElement) {
        videoElement.removeEventListener("play", handlePlay);
        videoElement.removeEventListener("pause", handlePause);
        videoElement.removeEventListener("ended", handleEnded);
      }
    };
  }, [])

  return { showAside, showPlayer, showControl, currentControl, videoContainer, setVideoControls, playVideo, controlVideo }
};