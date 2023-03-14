import React, { useRef, useEffect } from 'react';

import PhoneMockup from '../../../assets/icons/phone-mockup.svg';
import PhoneMockupDark from '../../../assets/icons/phone-mockup-dark.svg';

import './Video.css';

export default function Video({
  videoLink,
  setVideo,
  setDelayVideo,
  onVideoEnd,
  isLight,
  isWeb,
  deletePhoneMockUp,
}) {
  const videoRef = useRef();
  const canceledRef = useRef(false);

  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const onPlayHandler = async () => {
    let time = 0;
    setDelayVideo((videoRef?.current?.duration * 1000) / 100);

    while (time < 100) {
      time = time + 1;
      if (!canceledRef.current) {
        setVideo((prev) => prev + 1);
        await sleep((videoRef?.current?.duration * 1000) / 100);
      }
    }
  };

  useEffect(() => {
    canceledRef.current = false;
    return () => {
      console.log('canceled');
      canceledRef.current = true;
    };
  }, []);

  console.log(deletePhoneMockUp);

  return (
    <div className={`${isWeb ? '' : 'video-container-full'}`}>
      {!deletePhoneMockUp && (
        <div
          className="phone-mockup-blank"
          style={{ width: 280, height: 470, marginTop: 50 }}
        >
          <div
            style={{
              backgroundColor: 'white',
              width: '100%',
              height: '100%',
            }}
          ></div>
        </div>
      )}
      <video
        src={videoLink}
        muted={true}
        onEnded={onVideoEnd}
        height={460}
        className={isWeb ? 'video-container-web' : ''}
        ref={videoRef}
        autoPlay={true}
        onPlay={onPlayHandler}
      ></video>
      {isWeb && <div className={'video-container-border'}></div>}
      {!isWeb && (
        <img
          src={isLight ? PhoneMockupDark : PhoneMockup}
          className="phone-mockup"
          height={550}
        />
      )}
    </div>
  );
}
