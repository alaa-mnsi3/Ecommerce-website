import React from 'react';
import {Card} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import styles from './ProductList.module.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faHeart, faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons'
import ProListContainer from './ProListContainer';

function ProductList({active = true , num = 8 , data}) 
{

    const {checkedHearts,handleAddHeart,handleRemoveHeart} = ProListContainer()

  return(
    <>
        {data?
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
            :
            <div>Loading....</div>
        }
        {active&&
        <Link to='/products' className={styles.More}>
            <span className={styles.childMore}>
                More ...
            </span>
        </Link>}
    </>
  );
}

export default ProductList;
