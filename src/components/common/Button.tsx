'use client';
import React, { useState } from 'react';
import mergeClassNames from '@/shares/utils/mergeClassNames';
import SpinnerIcon from '@/components/icons/SpinnerIcon'
import { cva, VariantProps } from 'class-variance-authority';

type ButtonProps = {
  type?: 'submit' | 'button' | 'reset';
  children: React.ReactNode;
  onClick?: () => void;
  isLoading?: boolean;
  classes?: string;
} & VariantProps<typeof buttonStyles>;

const buttonStyles = cva(
  'tracking-wide text-center w-full rounded-lg font-bold box-border cursor-pointer', // Common base styles
  {
    variants: {
      variant: {
        contained: 'text-white bg-primary border-none',
        outlined: 'text-primary bg-white border border-primary',
        warning: 'text-white bg-status-warning',
        text: 'text-grey-600 bg-transparent underline underline-offset-4 p-0 border-none',
      },
      size: {
        small: 'text-[14px] py-2 px-3',
        normal: 'text-base py-3 px-5',
        none: 'p-0'
      },
      disabled: {
        true: 'text-grey-400 bg-grey-200 cursor-not-allowed',
      },
      pressing: {
        true: '',
      },
    },
    compoundVariants: [
      // Pressing Status
      {
        variant: 'contained',
        pressing: true,
        className: 'bg-primary-dark',
      },
      {
        variant: 'outlined',
        pressing: true,
        className: 'bg-[#e5e5e5]',
      },
      // Disabled Status
      {
        variant: 'outlined',
        disabled: true,
        className: 'border-grey-300 text-grey-300 bg-white',
      },
      {
        variant: 'text',
        disabled: true,
        className: 'bg-transparent',
      },
    ],
    defaultVariants: {
      variant: 'text',
      disabled: false,
      size: 'normal',
    },
  },
);

const Button: React.FC<ButtonProps> = ({
  type,
  children,
  onClick,
  disabled = false,
  isLoading = false,
  classes,
  variant = 'contained',
  size = 'normal',
}) => {
  const [isPressing, setIsPressing] = useState(false);

  const handlePressStart = () => {
    if (!disabled) {
      setIsPressing(true);
    }
  };

  const handlePressEnd = () => {
    setIsPressing(false);
  };
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || isLoading}
      className={mergeClassNames(
        buttonStyles({
          variant,
          disabled: disabled || isLoading,
          pressing: isPressing,
          size,
        }),
        classes,
      )}
      onMouseDown={handlePressStart}
      onMouseUp={handlePressEnd}
      onMouseLeave={handlePressEnd}
      onTouchStart={handlePressStart}
      onTouchEnd={handlePressEnd}
    >
      <div className="flex items-center justify-center gap-x-3 whitespace-nowrap">
        {isLoading && <SpinnerIcon />}
        {children}
      </div>
    </button>
  );
};

export default Button;
