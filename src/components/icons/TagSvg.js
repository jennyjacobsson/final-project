import React from 'react';

export const TagSvg = ({ fill, className }) => (
  <svg
    version="1.1"
    // xmlnsSvgjs="http://svgjs.com/svgjs"
    xmlns="http://www.w3.org/2000/svg"
    // xmlnsXlink="http://www.w3.org/1999/xlink"
    width="40"
    height="40"
    viewBox="0 0 40 40"
    // style="enable-background:new 0 0 40 40;"
    xmlSpace="preserve"
    className={className}
    fill={fill}>
    <path
      d="M39.2,22.7L18.1,1.6c-1-1-2.4-1.6-3.9-1.6H2.7C1.2,0,0,1.2,0,2.7v11.4c0,1.5,0.6,2.8,1.6,3.9l21.1,21.1
	c1.1,1.1,2.8,1.1,3.9,0l12.6-12.6C40.3,25.5,40.3,23.8,39.2,22.7z M9.6,12.3c-1.5,0-2.7-1.2-2.7-2.7s1.2-2.7,2.7-2.7
	s2.7,1.2,2.7,2.7S11.1,12.3,9.6,12.3z" />
  </svg>
);