import withIconWrapper from '../../../utils/withIconWrapper';
const CloseIcon = () => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 1L11 11"
        stroke="#757575"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M11 1L1 11"
        stroke="#757575"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default withIconWrapper(CloseIcon);
