import { FC } from 'react';
import Link from 'next/link';

import s from './Usernav.module.css';

const Usernav: FC = () => {
  return (
    <nav>
      <ul className={s.list}>
        <li className={s.item}>Cart</li>
        <li className={s.item}>
          <Link href='/'>Wishlist</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Usernav;
