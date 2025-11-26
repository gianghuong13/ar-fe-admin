'use client';
import Button from '@/components/common/Button';
import React, { useEffect, useRef } from 'react';

type ModalProps = {
  isOpen: boolean;
  handleClose: () => void;
  title: string;
  children: React.ReactNode;
  noFooter?: boolean;
  footerButtonText?: string;
  onFooterButtonClick?: () => void;
  haveManyButtons?: boolean;
  buttons?: React.ReactNode;
};

const Modal: React.FC<ModalProps> = ({
  isOpen,
  handleClose,
  title,
  children,
  footerButtonText,
  onFooterButtonClick,
  noFooter,
  haveManyButtons,
  buttons,
}) => {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        handleClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, handleClose]);

  return (
    isOpen && (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
        <div
          className="modal-content w-full max-w-md rounded-md bg-white"
          ref={ref}
        >
          {/* Modal Header */}
          <div className="modal-header flex items-center justify-between border-b px-6 py-4">
            <h2 className="text-xl font-semibold">{title}</h2>
            <button
              className="close-btn text-grey-500 hover:text-grey-700 cursor-pointer text-2xl font-bold"
              onClick={handleClose}
            >
              ×
            </button>
          </div>

          {/* Modal Body/Content */}
          <div className="modal-body p-6">{children}</div>

          {/* Modal Footer with one button or many buttons */}
          {!noFooter && (
            <div className="modal-footer bg-grey-50 flex justify-end gap-x-3 rounded-b-md border-t px-6 py-4">
              {haveManyButtons ? (
                buttons
              ) : (
                <Button
                  type="button"
                  onClick={onFooterButtonClick}
                  classes="w-fit"
                >
                  {footerButtonText}
                </Button>
              )}
            </div>
          )}
        </div>
      </div>
    )
  );
};

export default Modal;
