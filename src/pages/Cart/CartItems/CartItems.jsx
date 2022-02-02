import React from 'react';
import CartListView from '../../../components/CartList/CartListView';
import styles from '../../../components/CartList/CartListStyles.module.css';

function CartItems({data,TotalPrice,Cart}) 
{
  console.log(Cart)
  return (
    <div>
        {/* Items in cart */} 
        <CartListView data={data} Cart={Cart}/>

        {/* Total Price */}
        <p className={styles.TotalPriceWrapper}>
            TotalPrice : <span className={styles.TotalPrice}>${TotalPrice}.00</span>
        </p>

    </div>
  );
}


export default CartItems;
