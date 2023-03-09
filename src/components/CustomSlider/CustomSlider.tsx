import React, { useCallback, useEffect, useState, useRef } from 'react';
import Slider from 'react-slick';
// import './CustomSlider.css';
export default function CustomSlider({ children, ...props }) {
  const dragging = useRef(false);

  const handleOnItemClick = useCallback(
    (e) => {
      console.log(dragging.current);
      if (dragging.current) {
        e.stopPropagation();
        e.preventDefault();
        dragging.current = false;
        var anchorTags = document.getElementsByTagName('a');
        var anchorsList = Array.prototype.slice.call(anchorTags);
        anchorsList.forEach((el) => {
          el.style.pointerEvents = 'auto';
        });
      }
    },
    [dragging]
  );

  return (
    <Slider
      swipeEvent={(event) => {
        dragging.current = true;
        console.log('dragging tru');
        var anchorTags = document.getElementsByTagName('a');
        var anchorsList = Array.prototype.slice.call(anchorTags);
        anchorsList.forEach((el) => {
          el.style.pointerEvents = 'none';
        });
      }}
      afterChange={() => {
        dragging.current = false;
        console.log('draggin fals');

        var anchorTags = document.getElementsByTagName('a');
        var anchorsList = Array.prototype.slice.call(anchorTags);
        anchorsList.forEach((el) => {
          el.style.pointerEvents = 'auto';
        });
      }}
      {...props}
    >
      {React.Children.map(children, (child) => (
        <div onClickCapture={handleOnItemClick}>{child}</div>
      ))}
    </Slider>
  );
}
