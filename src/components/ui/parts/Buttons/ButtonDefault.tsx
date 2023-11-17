import type { FC } from 'react';

interface Props {
  label: string;
  color?: 'blue' | 'green' | 'yellow' | 'red' | 'purple' | 'gray';
  outline?: boolean;
  disabled?: boolean;
  size?: 'xs' | 'sm' | 'base' | 'lg' | 'xl';
  action?: () => void;
  link?: string;
  customStyle?: string;
}

export const ButtonDefault: FC<Props> = ({
  label,
  color = 'blue',
  outline = false,
  disabled = false,
  size = 'base',
  action,
  link,
  customStyle,
}) => {
  const buttonColor = (() => {
    switch (color) {
      case 'blue':
        if (outline) {
          return 'border-blue-500 hover:md:bg-blue-100 disabled:bg-white text-blue-500';
        } else {
          return 'border-blue-500 bg-blue-500 hover:md:border-blue-700 hover:md:bg-blue-700 disabled:border-blue-300 disabled:bg-blue-300 text-white';
        }
      case 'green':
        if (outline) {
          return 'border-green-500 hover:md:bg-green-100 disabled:bg-white text-green-500';
        } else {
          return 'border-green-500 bg-green-500 hover:md:border-green-700 hover:md:bg-green-700 disabled:border-green-300 disabled:bg-green-300 text-white';
        }
      case 'yellow':
        if (outline) {
          return 'border-yellow-500 hover:md:bg-yellow-100 disabled:bg-white text-yellow-500';
        } else {
          return 'border-yellow-500 bg-yellow-500 hover:md:border-yellow-700 hover:md:bg-yellow-700  disabled:border-yellow-300 disabled:bg-yellow-300 text-white';
        }
      case 'red':
        if (outline) {
          return 'border-red-500 hover:md:bg-red-100 disabled:bg-white text-red-500';
        } else {
          return 'border-red-500 bg-red-500 hover:md:border-red-700 hover:md:bg-red-700 disabled:border-red-300 disabled:bg-red-300 text-white';
        }
      case 'purple':
        if (outline) {
          return 'border-purple-500 hover:md:bg-purple-100 disabled:bg-white text-purple-500';
        } else {
          return 'border-purple-500 bg-purple-500 hover:md:border-purple-700 hover:md:bg-purple-700 disabled:border-purple-300 disabled:bg-purple-300 text-white';
        }
      case 'gray':
        if (outline) {
          return 'border-gray-500 hover:md:bg-gray-100 disabled:bg-white text-gray-500';
        } else {
          return 'border-gray-500 bg-gray-500 hover:md:border-gray-700 hover:md:bg-gray-700 disabled:border-gray-300 disabled:bg-gray-300 text-white';
        }
      default:
        if (outline) {
          return 'border-blue-500 hover:md:bg-blue-100 disabled:border-blue-300 text-blue-500 ';
        } else {
          return 'border-blue-500 bg-blue-500 hover:md:border-blue-700 hover:md:bg-blue-700 disabled:border-blue-300 disabled:bg-blue-300 text-white';
        }
    }
  })();
  const buttonSize = (() => {
    switch (size) {
      case 'xs':
        return 'px-3 py-1.5 text-xs';
      case 'sm':
        return 'px-4 py-1.5 text-sm';
      case 'base':
        return 'px-5 py-2 text-sm';
      case 'lg':
        return 'px-6 py-2 text-base';
      case 'xl':
        return 'px-8 py-2.5 text-lg';
      default:
        return 'px-5 py-2.5 text-sm';
    }
  })();
  const style = `rounded-lg border text-center font-medium shadow-sm transition-all disabled:cursor-not-allowed disabled:pointer-events-none ${buttonColor} ${buttonSize}${
    customStyle === undefined ? '' : ` ${customStyle}`
  }`;
  return (
    <>
      {action !== undefined && (
        <button
          onClick={disabled ? undefined : action}
          type="button"
          className={style}
          disabled={disabled}
        >
          {label}
        </button>
      )}
      {link !== undefined && (
        <a href={link} className={style}>
          {label}
        </a>
      )}
    </>
  );
};
