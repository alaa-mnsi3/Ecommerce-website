import React from 'react';
import styles from './CartItems.module.css';
import ListCart from './ListCart/ListCart';

function CartItems({data,TotalPrice,Cart}) 
{
  return (
    <div className={styles.parentCard}>
        <ListCart data={data} Cart={Cart}/>
        <p className={styles.totalPriceWrapper}>
            TotalPrice : <span className={styles.totalPrice}>${TotalPrice}.00</span>
        </p>
    </div>
  );
}

export default CartItems;
