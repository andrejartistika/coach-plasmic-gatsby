import React, { useCallback, useEffect, useState } from 'react';
import Slider from 'react-slick';
// import './CustomSlider.css';
export default function CustomSlider({ children, ...props }) {
  const [dragging, setDragging] = useState(false);

  const handleOnItemClick = useCallback(
    (e) => {
      if (dragging) {
        e.stopPropagation();
        e.preventDefault();
        setDragging(false);
        var anchorTags = document.getElementsByTagName('a');
        var anchorsList = Array.prototype.slice.call(anchorTags);
        anchorsList.forEach((el) => {
          el.style.pointerEvents = 'auto';
        });
      }
    },
    [dragging]
  );

  const handleSwiped = useCallback(() => {
    setDragging(true);
  }, [setDragging]);

  useEffect(() => {
    var anchorTags = document.getElementsByTagName('a');
    var anchorsList = Array.prototype.slice.call(anchorTags);
    anchorsList.forEach((el) => {
      el.style.pointerEvents = 'none';
    });
  }, [dragging]);

  return (
    <Slider
      swipeEvent={(event) => {
        setDragging(true);
      }}
      afterChange={() => {
        setDragging(false);
      }}
      onSwipe={handleSwiped}
      {...props}
    >
      {React.Children.map(children, (child) => (
        <div onClickCapture={handleOnItemClick}>{child}</div>
      ))}
    </Slider>
  );
}
