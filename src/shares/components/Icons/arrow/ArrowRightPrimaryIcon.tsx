import React from 'react';
import withIconWrapper from '../../../utils/withIconWrapper';
const ArrowRightPrimaryIcon: React.FC = () => (
  <svg
    width="25"
    height="24"
    viewBox="0 0 25 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_8486_18878)">
      <path
        d="M1.5 12C1.5 5.92487 6.42487 1 12.5 1C18.5751 1 23.5 5.92487 23.5 12C23.5 18.0751 18.5751 23 12.5 23C6.42487 23 1.5 18.0751 1.5 12Z"
        fill="#5AC0B1"
        fillOpacity="0.3"
      />
      <path
        d="M3.5 12C3.5 7.02944 7.52944 3 12.5 3C17.4706 3 21.5 7.02944 21.5 12C21.5 16.9706 17.4706 21 12.5 21C7.52944 21 3.5 16.9706 3.5 12Z"
        fill="#5AC0B1"
        fillOpacity="0.8"
      />
      <path
        d="M8.5 12H17.5"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M13.5 8L17.5 12L13.5 16"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_8486_18878">
        <rect width="24" height="24" fill="white" transform="translate(0.5)" />
      </clipPath>
    </defs>
  </svg>
);

export default withIconWrapper(ArrowRightPrimaryIcon);
