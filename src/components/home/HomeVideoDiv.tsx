"use client";
import { useVideoControl } from "@/hooks/useVideoControl";
import { FiChevronRight, FiPlay, FiPause } from "react-icons/fi";

export default function HomeVideoDiv() {
  const { showAside, showPlayer, showControl, currentControl, videoContainer, setVideoControls, playVideo, controlVideo } = useVideoControl();

  return (
    <div id="videoDiv">
      <video id="videoMain" preload="none" onClick={controlVideo} ref={videoContainer} poster={"/assets/advert-video/advert-video-poster.jpeg"} src={"/assets/advert-video/advert-video.mp4"} />
      <div id="videoControllerDiv">
        { showAside && <aside id="videoAside" onMouseEnter={() => setVideoControls(state => ({ ...state, showPlayer: true }))} onMouseLeave={() => setVideoControls(state => ({ ...state, showPlayer: false }))}>
          { showPlayer ? <p id="videoPlay" className="paragraphStyles videoCursor" onClick={playVideo}>PLAY VIDEO</p> : <FiChevronRight className="videoPlayer" /> }
        </aside> }
        { showControl && ( currentControl ? <FiPause className="videoPlayer" /> : <FiPlay className="videoPlayer" /> ) }
      </div>
    </div>
  );
};
