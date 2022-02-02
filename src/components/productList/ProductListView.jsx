import React from 'react';
import {Card} from 'react-bootstrap';

import {Link} from 'react-router-dom';

// Styling this Component
import styles from './ProductListStyle.module.css';

// Fontaswome
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faHeart, faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons'

// Function that specialized for this component
import ProductListContainer from './ProductListContainer';


function ProductListView({active = true , num = 8 , data}) 
{

    const {checkedHearts,handleAddHeart,handleRemoveHeart} = ProductListContainer()

  return(
    <>
        {data &&
            data.map((product,index) => (
                <React.Fragment key={Math.random()}>
                    {index < num &&
                        <Card className={styles.parentCard}>

                            <div className={styles.cardHover}>
                                {
                                    checkedHearts?.includes(product.id)?
                                        <FontAwesomeIcon icon={faHeart} className={styles.active} onClick={()=>handleRemoveHeart(product)}/>
                                    :
                                        <FontAwesomeIcon icon={farHeart} className={styles.cardIcon} onClick={()=>handleAddHeart(product)}/>
                                }
                                <Link to={`/products/${product.id}`} className={`${styles.cardIcon} ${styles.shoppingIcon}`}>
                                    <FontAwesomeIcon icon={faShoppingCart}/>
                                </Link>
                            </div>

                            <Card.Img className={styles.cardImage} variant="top" src={product.imageSrc} />
                            <Card.Body className={styles.cardBody}>
                                <Card.Title  className={styles.cardTitle}>{product.productName}</Card.Title>
                                <Card.Text className={styles.cardText}>
                                    ${product.priceProduct}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    }
                </React.Fragment>
            ))
        }
        
        {
            active&&
            <Link to='/filters' className={styles.More}>
                <span className={styles.childMore}>
                    More ...
                </span>
            </Link>
        }
    </>
  );
}


export default ProductListView;
