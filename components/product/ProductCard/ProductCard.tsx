import { Product } from '@common/types/product';
import { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import s from './ProductCard.module.css';

interface Props {
  product: Product;
}

const placeholderImage = '/product-image-placeholder.svg';

const ProductCard: FC<Props> = ({ product }) => {
  return (
    <Link href={`/products/${product.slug}`} className={s.root}>
      <div className={s.productBg}></div>
      <div className={s.productTag}>
        <h3 className={s.productTitle}>
          <span>{product.name}</span>
        </h3>
        <span className={s.productPrice}>$14</span>
      </div>
      {product.images && (
        <Image
          alt={product.name ?? 'Product Image'}
          src={product.images[0].url ?? placeholderImage}
          height={540}
          width={540}
          quality='85'
        />
      )}
    </Link>
  );
};

export default ProductCard;
