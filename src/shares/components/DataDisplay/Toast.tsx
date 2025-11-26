import ErrorIcon from '../Icons/toast/ErrorIcon';
import SuccessIcon from '../Icons/toast/SuccessIcon';
import CloseIcon from '../Icons/toast/CloseIcon';
import { TypeOptions } from 'react-toastify';
import '../../styles/toast.css';

interface ToastProps {
  message: string;
  type: TypeOptions; // 'info' | 'success' | 'warning' | 'error' | 'default';
  closeToast?: () => void;
}

const Toast: React.FC<ToastProps> = ({ message, type, closeToast }) => {
  const Icon = type === 'success' ? SuccessIcon : ErrorIcon;

  return (
    <div className="flex items-center justify-between gap-2 font-robotoNoto">
      <div className="flex flex-1 items-center gap-2 text-sm tracking-wide text-grey-700">
        <Icon />
        <div className="flex flex-col gap-1">
          <p className="m-0">{message}</p>
        </div>
      </div>
      <div
        className="flex h-8 w-8 cursor-pointer items-center justify-center"
        onClick={closeToast}
      >
        <CloseIcon classes="cursor-pointer" />
      </div>
    </div>
  );
};

export default Toast;
