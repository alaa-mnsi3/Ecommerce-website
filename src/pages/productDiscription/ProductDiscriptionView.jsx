import React from 'react';
import ProductDiscriptionContainer from './ProductDiscriptionContainer';
import styles from './ProductDisc.module.css';


function ProductDiscription() 
{
  const {product,Quantity,handleAddTocart,handlePlusQuantity,handleMinusQuantity} = ProductDiscriptionContainer()

  return (
      <section className={styles.DiscParent}>

        <div className={styles.DiscImage}>
            <img  src={product.imageSrc} alt='product-image'/>
        </div>
        <div className={styles.DiscBody}>
            <h3 className={styles.DisHeader}>
                {product.productName}
            </h3>
            <p className={styles.DiscBodyPragraph}>
                {product.Discription}
            </p>
            <span className={styles.DiscBodyPrice}>
                ${(Math.round(product.priceProduct)) * Quantity}.00
            </span>
            <div className={styles.parentBtns}>
                <button className={styles.DiscBodybtn} onClick={handlePlusQuantity}>+</button>
                <span>{Quantity}</span>
                <button className={styles.DiscBodybtn} onClick={handleMinusQuantity}>-</button>
            </div>
            <div>
                <button className={!(Quantity <= 0)? styles.AddToCart : styles.disabled} disabled={Quantity <= 0? true : false} onClick={handleAddTocart}>Add to cart</button>
            </div>
        </div>

      </section>
    )
}

export default ProductDiscription;
