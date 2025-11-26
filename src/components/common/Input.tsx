'use client';
import React, { useState } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
import mergeClassNames from '@/shares/utils/mergeClassNames';
import EyeHideIcon from '@/components/icons/EyeHideIcon';
import EyeShowIcon from '@/components/icons/EyeShowIcon';

type InputProps = {
  id: string;
  label: string;
  type: string;
  placeholder: string;
  register: UseFormRegisterReturn;
  error?: string;
  classes?: string;
  autoFocus?: boolean;
  disabled?: boolean;
  LeftCaption?: React.FC;
  RightCaption?: React.FC;
  hasCommonError?: boolean;
};

const Input: React.FC<InputProps> = ({
  id,
  label,
  type,
  placeholder,
  register,
  error,
  classes,
  autoFocus,
  disabled = false,
  LeftCaption,
  RightCaption,
  hasCommonError,
}) => {
  const [isShowPassword, setShowPassword] = useState(false);
  const isTypePassword = type === 'password';

  const togglePasswordVisibility = () => {
    setShowPassword(!isShowPassword);
  };
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <div className="relative">
        <input
          id={id}
          type={isTypePassword ? (isShowPassword ? 'text' : 'password') : type}
          placeholder={placeholder}
          autoFocus={autoFocus}
          disabled={disabled}
          {...register}
          className={mergeClassNames(
            'mt-1 block w-full rounded-md border px-4 py-2 text-gray-900 shadow-xs focus:border-indigo-500 focus:ring-indigo-500',
            error || hasCommonError ? 'border-red-500' : 'border-gray-300',
            disabled ? 'cursor-not-allowed bg-gray-100 opacity-50' : '',
            type === 'number'
              ? 'appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none'
              : '',
            classes,
          )}
        />
        {type === 'password' && (
          <div
            className="absolute inset-y-0 right-2 flex cursor-pointer select-none items-center px-2"
            onClick={togglePasswordVisibility}
          >
            {isShowPassword ? <EyeShowIcon /> : <EyeHideIcon />}
          </div>
        )}
      </div>

      <div className="mt-1 flex justify-between text-sm">
        {error ? (
          <p className="text-red-500">{error}</p>
        ) : (
          LeftCaption && <LeftCaption />
        )}
        {RightCaption && <RightCaption />}
      </div>
    </div>
  );
};

export default Input;
