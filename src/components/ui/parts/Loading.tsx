import { FC } from 'react';

interface Props {
  children: React.ReactNode;
  isLoading: boolean;
}

export const Loading: FC<Props> = ({ children, isLoading }) => {
  return (
    <>
      {isLoading ? (
        <div className="flex justify-center" aria-label="読み込み中">
          <div className="animate-spin h-10 w-10 border-4 border-green-500 rounded-full border-t-transparent"></div>
        </div>
      ) : (
        <>{children}</>
      )}
    </>
  );
};
