import React, { useRef } from 'react';

import PhoneMockup from '../../../assets/icons/phone-mockup.svg';
import PhoneMockupDark from '../../../assets/icons/phone-mockup-dark.svg';

import './Video.css';

export default function VideoMinimized({
  videoLink,
  setVideo,
  setDelayVideo,
  onVideoEnd,
  isLight,
  isWeb,
}) {
  const videoRef = useRef();

  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const onPlayHandler = async () => {
    let time = 0;
    setDelayVideo((videoRef?.current?.duration * 1000) / 100);

    while (time < 100) {
      time = time + 1;
      setVideo((prev) => prev + 1);
      await sleep((videoRef?.current?.duration * 1000) / 100);
    }
  };

  return (
    <div
      className={
        isWeb ? 'video-container-minimized-web' : 'video-container-minimized'
      }
    >
      <div className="phone-mockup-blank">
        <div
          style={{
            backgroundColor: 'white',
            width: '100%',
            height: '100%',
          }}
        ></div>
      </div>
      <video
        style={{ zIndex: 0 }}
        src={videoLink}
        muted={true}
        onEnded={onVideoEnd}
        height={374}
        className={isWeb ? 'video-container-web-mobile' : 'video-container-app'}
        ref={videoRef}
        autoPlay={true}
        onPlay={onPlayHandler}
      ></video>
      {isWeb && <div className={'video-container-border'}></div>}
      {!isWeb && (
        <div className="phone-mockup">
          <img src={isLight ? PhoneMockupDark : PhoneMockup} height={450} />
        </div>
      )}
    </div>
  );
}
