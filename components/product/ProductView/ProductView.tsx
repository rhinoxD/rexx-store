import { FC, useState } from 'react'
import Image from 'next/image'
import cn from 'classnames'

import s from './ProductView.module.css'
import { Container, Button } from '@components/ui'
import { Product } from '@common/types/product'
import { ProductSlider, Swatch } from '@components/product'
import { Choices, getVariant } from '../helpers'
import { useUI } from '@components/ui/context'
import useAddItem from '@framework/cart/use-add-item'

interface Props {
  product: Product
}

const ProductView: FC<Props> = ({ product }) => {
  const [choices, setChoices] = useState<Choices>({})
  const { openSidebar } = useUI()
  const addItem = useAddItem()

  const variant = getVariant(product, choices)

  const addToCart = async () => {
    try {
      const item = {
        productId: String(product.id),
        variantId: String(variant?.id),
        variantOptions: variant?.options,
        quantity: 1,
      }

      const output = await addItem(item)
      alert(JSON.stringify(output))
      openSidebar()
    } catch {}
  }
  return (
    <Container>
      <div className={cn(s.root, 'fit')}>
        <div className={cn(s.productDisplay, 'fit', 'mb-5')}>
          <div className={s.nameBox}>
            <h1 className={s.name}>{product.name}</h1>
            <div className={s.price}>
              {product.price.value}
              {product.price.currencyCode}
            </div>
          </div>
          <ProductSlider>
            {product.images.map((image) => (
              <div key={image.url} className={s.imageContainer}>
                <Image
                  className={s.img}
                  src={image.url}
                  alt={image.alt}
                  width={1050}
                  height={1050}
                  quality='85'
                />
              </div>
            ))}
          </ProductSlider>
        </div>
        <div className={s.sidebar}>
          <section>
            {product.options.map((option) => (
              <div key={option.id} className='pb-4'>
                <h2 className='uppercase font-medium'>{option.displayName}</h2>
                <div className='flex flex-row py-4'>
                  {option.values.map((optVal) => {
                    const activeChoice =
                      choices[option.displayName.toLowerCase()]
                    return (
                      <Swatch
                        key={`${option.id}-${optVal.label}`}
                        label={optVal.label}
                        color={optVal.hexColor}
                        variant={option.displayName}
                        active={optVal.label.toLowerCase() === activeChoice}
                        onClick={() => {
                          setChoices({
                            ...choices,
                            [option.displayName.toLowerCase()]:
                              optVal.label.toLowerCase(),
                          })
                        }}
                      />
                    )
                  })}
                </div>
              </div>
            ))}
            <div className='pb-14 break-words w-full max-w-xl text-lg'>
              {product.description}
            </div>
          </section>
          <div>
            <Button className={s.button} onClick={addToCart}>
              Add to Cart
            </Button>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default ProductView
