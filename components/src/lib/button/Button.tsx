import { FC, ReactNode } from 'react';
interface Props {
  children?: ReactNode;
  variant?: string;
}
export const Button: FC<Props> = ({ children, variant }) => {
  return <button className="btn-blue font-secondary">{children}</button>;
};
