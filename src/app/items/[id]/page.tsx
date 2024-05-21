import React from 'react'
import Layout from '../../../../components/Layout'
import { basicFetch } from '../../../../api/fetchFunctions'
import { pdpApiUrl } from '../../../../config'
import ProductView from '../../../../components/ProductView'
import { formatter } from '../../../../components/ItemList'
import { Metadata } from 'next'

interface Price {
  currency: string
  amount: number
  decimals: number
}

interface Item {
  id: string
  title: string
  price: Price
  picture: string
  condition: string
  free_shipping: boolean
  description: string
}

interface Author {
  name: string
  lastname: string
}

interface PDPData {
  author: Author
  item: Item
}

const getPDPData = async (id: string | undefined): Promise<PDPData> => {
  const pdpEndpoint: string = pdpApiUrl(id)
  const response = await basicFetch(pdpEndpoint)
  return response as PDPData
}

const formatDecimals = (decimals: number) => {
  if (decimals === 0) {
    return '00'
  }
  const decimalString = decimals.toString()
  const withoutDot = decimalString.includes('.')
    ? decimalString.split('.')[1]
    : decimalString
  return withoutDot.padEnd(2, '0').slice(0, 2)
}

export const generateMetadata = async ({
  params,
}: {
  params: { id: string }
}): Promise<Metadata> => {
  const { id } = params
  const pdpData = await getPDPData(id)
  const { title } = pdpData.item

  return {
    title: title,
  }
}

const PDP = async ({ params }: { params: { id: string } }) => {
  const { id } = params
  const pdpData = await getPDPData(id)
  const { picture, title, price, description, condition } = pdpData.item

  const formattedPrice = formatter.format(price.amount)
  const formattedDecimals = formatDecimals(price.decimals)

  return (
    <div className="pdpContainer">
      <Layout />
      <ProductView
        imageUrl={picture}
        title={title}
        price={formattedPrice}
        description={description}
        condition={condition}
        decimals={formattedDecimals}
      />
    </div>
  )
}

export default PDP
