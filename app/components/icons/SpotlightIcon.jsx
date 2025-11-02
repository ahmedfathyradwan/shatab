'use client'

export default function SpotlightIcon({ className = '', color = '#D9D9D9' }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="27"
      viewBox="0 0 28 27"
      fill="none"
    >
      <path 
        d="M24.7945 16.5873L9.83887 2.3672L-2.20098e-05 7.7981L20.3814 26.6394L24.7945 16.5873Z" 
        fill={color} 
      />
      <path 
        d="M25.0396 7.51564L19.1554 1.87658L13.1519 6.74112L20.4543 13.581L25.0396 7.51564Z" 
        fill={color} 
      />
    </svg>
  )
}
