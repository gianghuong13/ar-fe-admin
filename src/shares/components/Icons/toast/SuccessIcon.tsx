import withIconWrapper from '../../../utils/withIconWrapper';

const SuccessIcon = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle opacity="0.2" cx="12" cy="12" r="11.52" fill="#5AC0B1" />
      <circle opacity="0.2" cx="11.9999" cy="11.9999" r="9.6" fill="#5AC0B1" />
      <circle cx="11.9999" cy="11.9998" r="7.68" fill="#5AC0B1" />
      <path
        d="M8.15991 12.4799L10.1121 14.8782C10.5085 15.3651 11.2578 15.3468 11.6299 14.8411L15.8399 9.11987"
        stroke="white"
        strokeWidth="1.728"
      />
    </svg>
  );
};

export default withIconWrapper(SuccessIcon);
