import React from 'react';
//Fontaswome
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons';
//Styles and Functions to this Components
import styles from './CartListStyles.module.css';
import CartListContainer from './CartListContainer';

function CartListView({data,Cart}) 
{
    const {handleDelete} = CartListContainer(Cart)

  return (
      <>
        {/* data is data from cart or watchList */}
        {data?.map(Item => 
        (
            <div key={Item.id} className={styles.Card}>
                <div className={styles.cardImage}>
                    <img  src={Item.imageSrc} alt="productImage"/>          
                </div>
                <div>
                <h3 className={styles.cardHeader}>
                    {Item.productName}
                </h3>
                <h4 className={styles.cardHeaderBottom}>
                    Company : {Item.companyName}
                </h4>
                <h4 className={styles.cardHeaderBottom}>
                    Price : ${Cart ? Math.round(Item.priceProduct) * Item.Quantity : Math.round(Item.priceProduct) * 1}.00
                </h4>
                {Cart&&<p className={styles.cardQuantityWrapper}>
                    Quantity : <span className={styles.cardQuantity}>{Item.Quantity}</span>
                </p>}
                </div>
                <button onClick={()=>handleDelete(Item.id)}>
                    <FontAwesomeIcon className={styles.RemoveIcon} icon={faTrash}/>
                </button>
            </div>
        ))}
    </>
  );
}

export default CartListView;
