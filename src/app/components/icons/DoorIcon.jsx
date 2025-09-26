'use client'

export default function DoorIcon({ className = '', color = '#C7BDB2' }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="68"
      height="157"
      viewBox="0 0 68 157"
      fill="none"
    >
      <rect x="0.608276" y="0.768555" width="66.6441" height="156.181" fill={color}/>
      <rect x="1.10828" y="1.26855" width="65.6441" height="155.181" stroke="black" strokeOpacity="0.4"/>
      <path d="M5.69568 6.3645H60.6389V156.95H5.69568V6.3645Z" fill={color}/>
      <path d="M60.139 6.8645V156.449H6.19568V6.8645H60.139Z" stroke="black" strokeOpacity="0.4"/>
      <rect x="13.3267" y="14.5044" width="39.6812" height="71.7314" fill={color}/>
      <rect x="13.8267" y="15.0044" width="38.6812" height="70.7314" stroke="black" strokeOpacity="0.4"/>
      <rect x="13.3267" y="90.3058" width="39.6812" height="49.3472" fill={color}/>
      <rect x="13.8267" y="90.8058" width="38.6812" height="48.3472" stroke="black" strokeOpacity="0.4"/>
      <rect x="16.8878" y="17.5569" width="33.0677" height="65.6266" fill={color}/>
      <rect x="17.3878" y="18.0569" width="32.0677" height="64.6266" stroke="black" strokeOpacity="0.4"/>
      <rect x="16.8878" y="93.8668" width="33.0677" height="42.7336" fill={color}/>
      <rect x="17.3878" y="94.3668" width="32.0677" height="41.7336" stroke="black" strokeOpacity="0.4"/>
    </svg>
  );
}
