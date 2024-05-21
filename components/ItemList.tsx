import React from 'react'
import styles from './ItemList.module.scss'
import Image from 'next/image'
import Link from 'next/link'

interface Price {
  currency: string
  amount: number
  decimals: number
}

export interface Item {
  id: string
  title: string
  price: Price
  picture: string
  condition: string
  free_shipping: boolean
}

interface ItemListProps {
  items: Item[]
}

export const formatter = new Intl.NumberFormat('es-AR', {
  style: 'decimal',
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
  useGrouping: true,
})

const ItemList: React.FC<ItemListProps> = ({ items }) => {
  return (
    <div className={styles.listContainer}>
      {items.map((item) => {
        const { id, picture, title, price, free_shipping } = item
        const { amount } = price
        const formatedAmount = formatter.format(amount)
        return (
          <div key={id} className={styles.itemContainer}>
            <Link href={`/items/${id}`} className={styles.imageContainer}>
              <Image src={picture} alt={title} height={180} width={180} />
            </Link>
            <div className={styles.descriptionContainer}>
              <Link href={`/items/${id}`} className={styles.price}>
                $ {formatedAmount}
                {free_shipping && (
                  <div className={styles.freeShippingContainer}>
                    <Image
                      src="/truck.svg"
                      height={16}
                      width={16}
                      alt="Envío Gratis"
                      className={styles.freeShippingIcon}
                    />
                  </div>
                )}
              </Link>
              <Link href={`/items/${id}`} className={styles.title}>
                {title}
              </Link>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default ItemList
