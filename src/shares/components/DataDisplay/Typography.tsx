import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import mergeClassNames from '../../utils/mergeClassNames';

export const VariantTypes = [
  // font-bold = 700
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'title',
  // font-normal = 400
  'callout',
  'body',
  'caption1',
  'caption2',
] as const;

export type TypographyVariant = (typeof VariantTypes)[number];

interface TypographyProps extends VariantProps<typeof typographyStyles> {
  children: React.ReactNode;
  classes?: string;
  onClick?: () => void;
  variant?: TypographyVariant;
}

const typographyStyles = cva(
  'text-grey-700 tracking-wide whitespace-pre-line',
  {
    variants: {
      variant: {
        h1: 'font-bold text-[32px]/6',
        h2: 'font-bold text-[28px]/6',
        h3: 'font-bold text-[24px]/6',
        h4: 'font-bold text-[20px]/6',
        h5: 'font-bold text-[18px]/6',
        h6: 'font-bold text-[16px]/6',
        title: 'font-bold text-[14px]/6',

        callout: 'font-normal text-[16px]/6',
        body: 'font-normal text-[14px]/6',
        caption1: 'font-normal text-[12px]/6',
        caption2: 'font-normal text-[10px]/6',
      },
    },
    defaultVariants: {
      variant: 'body',
    },
  },
);

const Typography: React.FC<TypographyProps> = ({
  variant = 'body',
  classes = '',
  children,
  onClick,
}) => {
  return (
    <p
      className={mergeClassNames(typographyStyles({ variant }), classes)}
      onClick={onClick}
    >
      {children}
    </p>
  );
};

export default Typography;
