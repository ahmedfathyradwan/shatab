'use client'

export default function CarpetIcon({ className = '', color = '#8E6232' }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="173"
      height="11"
      viewBox="0 0 173 11"
      fill="none"
    >
      <ellipse cx="86.5" cy="5.5" rx="86.5" ry="5.5" fill={color} />
    </svg>
  );
}
