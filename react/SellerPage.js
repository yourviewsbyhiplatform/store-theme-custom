import React, { useContext, useEffect, useRef, useState } from "react"
import { useProduct } from 'vtex.product-context'
import { useRuntime } from 'vtex.render-runtime'

const SellerPage = ({children, Products}) => {

  const { selectedItem } = useProduct()
  const { query } = useRuntime()

  const sellers = selectedItem?.sellers

  const actualSeller = sellers?.find((s) => s.sellerId === query.sellerId)

  return (
    <>
      <div style={{
          display: "flex",
          flexDirection:"column",
          justifyContent: "center",
          alignItems: "center"
        }}>
        <h2>{actualSeller?.sellerName}</h2>
        {children}
      </div>
      <div>
        <h2 style={{
          textAlign: "center"
        }}>Produtos</h2>
        {Products}
      </div>
    </>
  )
}

export default SellerPage