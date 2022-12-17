import { FC, ReactNode } from 'react';
import s from './Grid.module.css';

interface Props {
  children?: ReactNode;
}

const Grid: FC<Props> = ({ children }) => {
  return <div className={s.root}>{children}</div>;
};

export default Grid;
