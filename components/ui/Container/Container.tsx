import { FC, ReactNode } from 'react';

interface Props {
  children: ReactNode | ReactNode[];
  el?: any;
}

const Container: FC<Props> = ({ children, el: Component = 'div' }) => {
  return <Component className='max-w-8xl px-6 mx-auto'>{children}</Component>;
};

export default Container;
