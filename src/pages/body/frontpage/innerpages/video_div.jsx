import { useState, useRef } from "react";
import video_poster from "../../../../asset/images-icons/youtube-poster/video_poster.jpeg";
import advert_video from "../../../../asset/videos/advert_video.mp4";

const VideoDiv = () => {
  const [videoControls, setVideoControls] = useState({ showAside: true, showPlayer: false, showControl: false, currentControl: false });
  const { showAside, showPlayer, showControl, currentControl } = videoControls;
  const videoContainer = useRef();

  const PlayVideo = () => {
    videoContainer.current.play();
    setVideoControls(state => ({ ...state, showAside: false, showControl: true, currentControl: true }));
    setTimeout(() => {
      setVideoControls(state => ({ ...state, showControl: false }));
    }, 5000);
  };

  const ControlVideo = () => {
    if (currentControl) {
      videoContainer.current.pause();
      setVideoControls(state => ({ ...state, currentControl: false }));
    } else {
      videoContainer.current.play();
      setVideoControls(state => ({ ...state, showAside: false, currentControl: true }));
    };
    setVideoControls(state => ({ ...state, showControl: true }));
    setTimeout(() => {
      setVideoControls(state => ({ ...state, showControl: false }));
    }, 5000);
  };

  return (
    <div id="videoDiv">
      <video id="videoMain" onClick={ControlVideo} ref={videoContainer} poster={video_poster} src={advert_video} alt="products_adverts"></video>
      <div id="videoControllerDiv">
        {showAside && <aside id="videoAside" onMouseEnter={() => setVideoControls(state => ({ ...state, showPlayer: true }))} onMouseLeave={() => setVideoControls(state => ({ ...state, showPlayer: false }))}>
          {showPlayer ? <p id="videoPlay" className="paragraphStyles videoCursor" onClick={PlayVideo}>PLAY VIDEO</p> : <i className="fa-solid fa-chevron-right videoPlayer"></i>}
        </aside>}
        {showControl && <i className={`fa-solid ${currentControl ? "fa-pause" : "fa-play"} videoPlayer`}></i>}
      </div>
    </div>
  );
};

export default VideoDiv;