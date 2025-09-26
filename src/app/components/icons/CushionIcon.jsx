'use client'

export default function CushionIcon({ className = '', color = '#DEB282' }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="34"
      height="32"
      viewBox="0 0 34 32"
      fill="none"
    >
      <path
        d="M0 0C13.1896 1.40946 19.0516 1.37914 34 0C32.2414 10.7586 32.5344 20.9653 34 32C13.4827 30.0688 0 32 0 32C0 32 2.63785 9.93086 0 0Z"
        fill={color}
      />
    </svg>
  );
}
