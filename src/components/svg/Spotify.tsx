import React from 'react'

export const Spotify = ({ size = 24, strokeWidth = 2, ...rest }) => (
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
    <circle cx="12.067" cy="11.95" r="11" />
    <path d="M 5.85 15.535 C 9.194 14.667 12.848 14.234 16.413 16.333 M 5.312 12.286 C 9.991 11.336 13.485 11.139 18.057 13.591 M 4.803 9.059 C 6.494 8.463 8.395 8.128 10.322 8.087 C 13.502 8.018 16.754 8.754 19.249 10.447" />
  </svg>
)
