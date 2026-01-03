import React from 'react'
import ProductList from '../components/ProductList'

async function ProductsPage({searchParams}:{searchParams: Promise<{category:string}>}) {
  
  const category = (await searchParams).category
   return (
    <div className='mt-8'>
        <ProductList category={category} filterType="products" />
    </div>
  )
}

export default ProductsPage