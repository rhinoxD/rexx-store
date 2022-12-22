import { FC, ReactNode } from 'react';

import { Footer, Navbar } from '@components/common';
import s from './Layout.module.css';
import { CartSidebar } from '@components/cart';
import { Sidebar } from '@components/ui';
import { useUI } from '@components/ui/context';

interface Props {
  children?: ReactNode;
}

const Layout: FC<Props> = ({ children }) => {
  const ui = useUI();
  console.log(ui);
  return (
    <div className={s.root}>
      <Navbar />
      <Sidebar>
        <CartSidebar />
      </Sidebar>
      <main className='fit'>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
