import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import styles from '../CartItems.module.css';
import useCart from '../CartContainer';

function ListCart({data,Cart}) 
{
    const {handleDelete} = useCart(Cart)
  return (
      <>
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

export default ListCart;
