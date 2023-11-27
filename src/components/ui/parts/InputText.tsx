import { ChangeEvent, FC, useRef } from 'react';

interface Props<U> {
  value: U;
  onChange: (value: U) => void;
  type?: 'text' | 'number' | 'password' | 'date';
  forId: string;
  placeholder?: string;
  label?: string;
  disabled?: boolean;
  onValidate?: (value: U) => boolean;
  isError?: boolean;
  setIsError?: (value: boolean) => void;
  errorMessage?: string;
  customStyle?: string;
  required?: boolean;
}

// eslint-disable-next-line
export const InputText: FC<Props<any>> = ({
  value,
  onChange,
  type = 'text',
  forId,
  placeholder = '入力してください',
  label,
  disabled = false,
  onValidate,
  isError = false,
  setIsError,
  errorMessage,
  customStyle,
  required = false,
}) => {
  const blurRef = useRef<boolean>(false);
  const changeAction = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
    // バリデーション処理
    if (!blurRef.current) return;
    validateAction(e.target.value);
  };

  // eslint-disable-next-line
  const validateAction = (value: any) => {
    if (setIsError === undefined || onValidate === undefined) return;
    setIsError(!onValidate(value));
  };

  return (
    <div className={customStyle}>
      {label !== undefined && (
        <label
          htmlFor={forId}
          className={`mb-1 block text-sm font-medium ${
            required ? 'after:ml-0.5 after:text-red-500 after:content-["*"]' : ''
          }`}
        >
          {label}
        </label>
      )}
      <input
        type={type}
        id={forId}
        value={value}
        disabled={disabled}
        onChange={changeAction}
        onBlur={() => {
          validateAction(value);
          blurRef.current = true;
        }}
        className={`block w-full py-1 px-2 rounded-md border focus:ring-0 shadow-sm disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 text-black ${
          isError
            ? 'border-red-500 focus:border-red-500 focus:outline-red-500'
            : 'border-gray-400 focus:border-primary-400 focus:outline-primary-500'
        }`}
        placeholder={placeholder}
      />
      {isError && <p className="mt-1 text-sm text-red-500">{errorMessage}</p>}
    </div>
  );
};
