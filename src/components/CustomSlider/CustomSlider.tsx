import React, { useCallback, useState } from 'react';
import Slider from 'react-slick';
import './CustomSlider.css';
export default function CustomSlider({ children, ...props }) {
  const [dragging, setDragging] = useState(false);

  const handleOnItemClick = useCallback(
    (e) => {
      console.log('handleOnItemClick');
      if (dragging) {
        e.stopPropagation();
        e.preventDefault();
        setDragging(false);
      }
    },
    [dragging]
  );

  const handleSwiped = useCallback(() => {
    setDragging(true);
  }, [setDragging]);

  console.log('dragging', dragging);
  return (
    <Slider onSwipe={handleSwiped} {...props}>
      {React.Children.map(children, (child) => (
        <div onClickCapture={handleOnItemClick}>{child}</div>
      ))}
    </Slider>
  );
}
