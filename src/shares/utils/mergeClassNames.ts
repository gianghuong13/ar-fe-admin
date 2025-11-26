import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import type { ClassValue } from 'clsx';

function mergeClassNames(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export default mergeClassNames;
