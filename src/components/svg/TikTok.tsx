import React from 'react'

export const TikTok = ({ size = 24, strokeWidth = 2, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={strokeWidth}
    {...rest}
  >
    <path d="M9.54,8.29A7.48,7.48,0,1,0,17,15.77V8.62A9,9,0,0,0,22,10.19V5.87s-5.05-.16-5-5.11H12.12v15a2.59,2.59,0,1,1-2.58-2.59Z" />
  </svg>
)
