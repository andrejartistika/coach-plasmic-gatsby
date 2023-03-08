import React, { useCallback, useEffect, useState } from 'react';
import Slider from 'react-slick';
// import './CustomSlider.css';
export default function CustomSlider({ children, ...props }) {
  const [dragging, setDragging] = useState(false);

  const handleOnItemClick = useCallback(
    (e) => {
      console.log('handleOnItemClick');
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

  console.log('is dragging', dragging);

  useEffect(() => {
    // console.log(document.getElementsByTagName('a'));
    var anchorTags = document.getElementsByTagName('a');

    var anchorsList = Array.prototype.slice.call(anchorTags);

    anchorsList.forEach((el) => {
      el.style.pointerEvents = 'none';
    });

    // for (let elem in anchorsList) {
    //   console.log(elem);
    // }
  }, [dragging]);

  return (
    <Slider
      swipeEvent={(event) => {
        console.log(event);
        setDragging(true);
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
