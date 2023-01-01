import type { InferGetStaticPropsType } from 'next'

import { getAllProducts } from '@framework/product'
import { getConfig } from '@framework/api/config'
import { Layout } from '@components/common'
import { ProductCard } from '@components/product'
import { Grid, Hero, Marquee } from '@components/ui'

export async function getStaticProps() {
  const config = getConfig()
  const products = await getAllProducts(config)

  return {
    props: {
      products,
    },
    revalidate: 4 * 60 * 60,
  }
}

export default function Home({
  products,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Grid>
        {products.slice(0, 3).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Grid>
      <Hero
        headline='Cookies, ice creams and muffins'
        description='Topping lemon drops candy canes cheesecake cotton candy jujubes donut gummi bears. Muffin shortbread pudding cheesecake chocolate candy gingerbread gummi bears. Pudding toffee oat cake powder lemon drops carrot cake. Brownie cake pastry muffin candy canes. Toffee toffee soufflé sweet fruitcake danish fruitcake jelly beans biscuit. Caramels macaroon carrot cake toffee bonbon danish shortbread. Pie tart powder chupa chups shortbread soufflé toffee muffin. Biscuit cotton candy lollipop sweet roll candy topping wafer. Tiramisu brownie shortbread cookie pie powder jelly beans sesame snaps. Tiramisu carrot cake ice cream gummies icing ice cream. Tart biscuit dragée sweet roll gummies. Halvah shortbread cake biscuit bonbon caramels macaroon sweet.'
      />
      <Marquee>
        {products.slice(0, 3).map((product) => (
          <ProductCard key={product.id} product={product} variant='slim' />
        ))}
      </Marquee>
      <Grid layout='B'>
        {products.slice(0, 3).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Grid>
      <Marquee variant='secondary'>
        {products.slice(0, 3).map((product) => (
          <ProductCard key={product.id} product={product} variant='slim' />
        ))}
      </Marquee>
    </>
  )
}

Home.Layout = Layout
