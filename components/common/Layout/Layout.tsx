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
  const { isSidebarOpen, closeSidebar } = useUI();
  return (
    <div className={s.root}>
      <Navbar />
      <Sidebar onClose={closeSidebar} isOpen={isSidebarOpen}>
        <CartSidebar />
      </Sidebar>
      <main className='fit'>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
