import { FC, ReactNode } from 'react';

interface Props {
  children?: ReactNode;
}

const Layout: FC<Props> = ({ children }) => {
  return <div className='bg-blue-500'>{children}</div>;
};

export default Layout;
