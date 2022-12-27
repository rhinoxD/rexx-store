import {
  FC,
  ReactNode,
  Children,
  isValidElement,
  cloneElement,
  useState,
} from 'react'
import { useKeenSlider } from 'keen-slider/react'
import cn from 'classnames'

import s from './ProductSlider.module.css'

type Props = {
  children: ReactNode
}

const ProductSlider: FC<Props> = ({ children }) => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [sliderRef, instanceRef] = useKeenSlider(
    {
      loop: true,
      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel)
      },
    },
    [
      // add plugins here
    ]
  )
  return (
    <div className={s.root}>
      <div ref={sliderRef} className='keen-slider h-full transition-opacity'>
        <button
          onClick={(e: any) =>
            e.stopPropagation() || instanceRef.current?.prev()
          }
          className={cn(s.leftControl, s.control)}
        />
        <button
          onClick={(e: any) =>
            e.stopPropagation() || instanceRef.current?.next()
          }
          className={cn(s.rightControl, s.control)}
        />
        {Children.map(children, (child) => {
          if (isValidElement(child)) {
            return {
              ...child,
              props: {
                ...child.props,
                className: `${
                  child.props.className ? `${child.props.className}` : ''
                } keen-slider__slide`,
              },
            }
            // return cloneElement(child, {
            //   className: `${
            //     child.props.className
            //       ? `${child.props.className} keen-slider__slide`
            //       : ''
            //   }`,
            // })
          }
          return child
        })}
      </div>
    </div>
  )
}

export default ProductSlider
