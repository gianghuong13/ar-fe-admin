import React from 'react';
import withIconWrapper from '../../../utils/withIconWrapper';
const ArrowUpIcon: React.FC = () => (
  <svg
    width="14"
    height="8"
    viewBox="0 0 14 8"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ transform: 'rotate(180deg)' }}
  >
    <path
      d="M7.11116 5.06169L12.0612 0.111694L13.4752 1.52569L7.11116 7.88969L0.747159 1.52569L2.16116 0.111694L7.11116 5.06169Z"
      fill="#5A5A5A"
    />
  </svg>
);

export default withIconWrapper(ArrowUpIcon);
