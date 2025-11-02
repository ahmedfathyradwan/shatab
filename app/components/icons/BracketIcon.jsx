'use client'

export default function BracketIcon({ className = '', color = '#000000' }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="39"
      height="118"
      viewBox="0 0 39 118"
      fill="none"
    >
      <line 
        y1="-0.5" 
        x2="17.1622" 
        y2="-0.5" 
        transform="matrix(-1 0 0 1 36.3898 118)" 
        stroke={color} 
      />
      <line 
        y1="-0.5" 
        x2="52.0092" 
        y2="-0.5" 
        transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 37.3706 37.9502)" 
        stroke={color} 
      />
      <line 
        y1="-0.5" 
        x2="90.7143" 
        y2="-0.5" 
        transform="matrix(4.37114e-08 -1 -1 -4.37114e-08 27.0732 118)" 
        stroke={color} 
      />
    </svg>
  )
}
