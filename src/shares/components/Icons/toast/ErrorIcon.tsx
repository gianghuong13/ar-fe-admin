import withIconWrapper from '../../../utils/withIconWrapper';

const ErrorIcon = () => {
  return (
    <svg
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle opacity="0.2" cx="12.5" cy="12" r="11.52" fill="#E85979" />
      <circle opacity="0.2" cx="12.4999" cy="11.9999" r="9.6" fill="#E85979" />
      <circle cx="12.4999" cy="11.9998" r="7.68" fill="#E85979" />
      <path
        d="M8.65991 8.15991L16.3399 15.8399"
        stroke="white"
        strokeWidth="1.728"
      />
      <path
        d="M16.34 8.15991L8.65997 15.8399"
        stroke="white"
        strokeWidth="1.728"
      />
    </svg>
  );
};

export default withIconWrapper(ErrorIcon);
