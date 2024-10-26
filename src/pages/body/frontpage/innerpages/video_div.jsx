import { useState, useRef } from "react";
import video_poster from "../../../../asset/images-icons/youtube-poster/video_poster.jpeg";
import advert_video from "../../../../asset/videos/advert_video.mp4";

const VideoDiv = () => {
  const [showController, setShowController] = useState(true);
  const [showVideoPlayer, setShowVideoPlayer] = useState(false);
  const [videoPlayControl, setVideoPlayControl] = useState(false);
  const [currentAction, setCurrentAction] = useState(false);
  const [showWidth, setShowWidth] = useState(false);
  const [widthIcon, setWidthIcon] = useState(false);
  const videoContainer = useRef();

  const PlayVideo = () => {
    videoContainer.current.play();
    setShowController(false);
    setCurrentAction(true);
    setShowWidth(true);
    setVideoPlayControl(true);
    setTimeout(() => {
      setVideoPlayControl(false);
    }, 5000)
  }

  const ControlVideo = () => {
    if (currentAction) {
      videoContainer.current.pause();
      setCurrentAction(false);
    } else {
      videoContainer.current.play();
      setShowController(false);
      setCurrentAction(true);
    }
    setShowWidth(true);
    setVideoPlayControl(true);
    setTimeout(() => {
      setVideoPlayControl(false);
    }, 5000)
  }

  return (
    <div id="videoDiv">
      <video id="videoMain" onClick={ControlVideo} style={{ height: `${widthIcon ? "100%" : ""}` }} ref={videoContainer} poster={video_poster} src={advert_video} alt="products_adverts"></video>
      <div id="videoControllerDiv">
        {showController &&
          <aside id="videoAside" onMouseEnter={() => setShowVideoPlayer(true)} onMouseLeave={() => setShowVideoPlayer(false)}>
            {showVideoPlayer ? <p id="videoPlay" className="paragraphStyles videoCursor" onClick={PlayVideo}>PLAY VIDEO</p> : <i className="fa-solid fa-chevron-right videoPlayer"></i>}
          </aside>
        }
        {videoPlayControl && <i className={`fa-solid ${currentAction ? "fa-pause" : "fa-play"} videoPlayer`}></i>}
      </div>
      {showWidth && <span className="material-symbols-outlined videoWidthIcon" onClick={() => setWidthIcon(!widthIcon)}>{widthIcon ? "fullscreen_exit" : "fullscreen"}</span>}
    </div>
  );
};

export default VideoDiv;