import {ReactNode} from 'react';

export const ErrorMessage = ({children}: {children: ReactNode}) => {
  return (
    <div>
      <p className="error">{children}</p>
    </div>
  );
};
