import advert_video_poster from "../../assets/advert-video/advert-video-poster.jpeg";
import advert_video from "../../assets/advert-video/advert-video.mp4";
import { useVideoControl } from "../../hooks/useVideoControl";

const HomeVideoDiv = () => {
  const { showAside, showPlayer, showControl, currentControl, videoContainer, setVideoControls, playVideo, controlVideo } = useVideoControl();

  return (
    <div id="videoDiv">
      <video id="videoMain" onClick={controlVideo} ref={videoContainer} poster={advert_video_poster} src={advert_video} alt="products_adverts"></video>
      <div id="videoControllerDiv">
        {showAside && <aside id="videoAside" onMouseEnter={() => setVideoControls(state => ({ ...state, showPlayer: true }))} onMouseLeave={() => setVideoControls(state => ({ ...state, showPlayer: false }))}>
          {showPlayer ? <p id="videoPlay" className="paragraphStyles videoCursor" onClick={playVideo}>PLAY VIDEO</p> : <i className="fa-solid fa-chevron-right videoPlayer"></i>}
        </aside>}
        {showControl && <i className={`fa-solid ${currentControl ? "fa-pause" : "fa-play"} videoPlayer`}></i>}
      </div>
    </div>
  );
};

export default HomeVideoDiv;