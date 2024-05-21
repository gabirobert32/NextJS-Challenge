import React from 'react'
import styles from './ProductView.module.scss'
import Image from 'next/image'

interface ProductViewProps {
  imageUrl: string
  title: string
  price: string
  description: string
  condition: string
  decimals: string
}

const ProductView: React.FC<ProductViewProps> = ({
  imageUrl,
  title,
  price,
  description,
  condition,
  decimals,
}) => {
  return (
    <>
      <div className={styles.productView}>
        <div className={styles.topSection}>
          <div className={styles.imageContainer}>
            <Image
              src={imageUrl}
              alt={title}
              width={680}
              height={680}
              className={styles.productImage}
            />
          </div>
          <div className={styles.productDetails}>
            <p className={styles.condition}>
              {condition === 'new' ? 'Nuevo' : 'Usado'}
            </p>
            <p className={styles.title}>{title}</p>
            <p className={styles.price}>
              $ {price}
              <span>{decimals}</span>
            </p>
            <button className={styles.button}>Comprar</button>
          </div>
        </div>
        <div className={styles.bottomSection}>
          <p className={styles.descriptionHeading}>Descripción del producto</p>
          <p className={styles.description}>{description}</p>
        </div>
      </div>
    </>
  )
}

export default ProductView
