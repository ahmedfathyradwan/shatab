'use client'

export default function WallIcon({ className = '', color = '#EFE5DA' }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="349"
      height="200"
      viewBox="0 0 349 200"
      fill="none"
    >
      <rect width="349" height="200" fill={color} />
    </svg>
  );
}
