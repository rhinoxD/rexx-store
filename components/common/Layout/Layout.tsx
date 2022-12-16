import { FC, ReactNode } from 'react';
import s from './Layout.module.css';

interface Props {
  children?: ReactNode;
}

const Layout: FC<Props> = ({ children }) => {
  return (
    <>
      <main className={s.root}>{children}</main>;
    </>
  );
};

export default Layout;
