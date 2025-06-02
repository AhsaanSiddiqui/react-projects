import React from 'react'
import { useParams } from 'react-router-dom'

function Product() {
    const { productId } = useParams();
  return (
    <>
        Product: {productId}
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-4xl font-bold">Product Details</h1>
            <p className="mt-4 text-lg">Details about product {productId} will be displayed here.</p>
        </div>
    </>
  )
}

export default Product
