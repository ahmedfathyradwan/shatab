'use client'

export default function PaintingIcon({ className = '', color = '#4975A5' }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="44"
      height="60"
      viewBox="0 0 44 60"
      fill="none"
    >
      <rect x="0.5" y="0.5" width="43" height="59" fill={color} stroke="black"/>
    </svg>
  );
}
