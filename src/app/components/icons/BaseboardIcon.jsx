'use client'

export default function BaseboardIcon({ className = '', color = '#FFFFFF' }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="349"
      height="3"
      viewBox="0 0 349 3"
      fill="none"
    >
      <path d="M0 0H349V3H0V0Z" fill={color} />
    </svg>
  );
}
