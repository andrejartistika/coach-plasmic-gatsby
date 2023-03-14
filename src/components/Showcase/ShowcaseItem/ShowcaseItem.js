import React from 'react';
import '../ShowcaseComponent.css';

export function ShowcaseItem({
  title,
  description,
  itemIndex,
  index,
  onClick,
  currentVideoTime,
  videoDelay,
  icon,
  iconSelected,
  isLight,
}) {
  return (
    <div>
      <div
        className={`${isLight ? 'showcase--item-light' : 'showcase--item'} ${
          index == itemIndex ? 'selected' : ''
        }`}
        onClick={onClick}
      >
        <div className="showcase--item-title-desktop">
          {icon && (
            <img
              height={25}
              width={25}
              src={index == itemIndex ? iconSelected : icon}
            ></img>
          )}
          <h5>{title}</h5>
        </div>
        {<p style={{ paddingRight: 10, fontSize: 16 }}>{description}</p>}
      </div>
      <div
        style={{
          backgroundColor: isLight ? '#3E7CB1' : 'orange',
          height: '5px',
          maxWidth: `${currentVideoTime}%`,
          borderBottomLeftRadius: '30px',
          borderBottomRightRadius: '30px',
          display: index == itemIndex ? 'block' : 'none',
          transition: videoDelay ? `${videoDelay}ms` : `0ms`,
        }}
      ></div>
    </div>
  );
}
