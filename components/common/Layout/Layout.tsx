import { FC, ReactNode } from 'react';

import Footer from '../Footer';
import s from './Layout.module.css';

interface Props {
  children?: ReactNode;
}

const Layout: FC<Props> = ({ children }) => {
  return (
    <div className={s.root}>
      <main className='fit'>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
