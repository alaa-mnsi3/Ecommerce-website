import React from 'react';
import styled from 'styled-components';

import ProductListView from '../../components/productList/ProductListView';
import useFetch from '../../Custom Hook/useFetch';

// Styling Loading
import loading from '../../images/animal-1.1s-200px.png'
import styles from '../Filters/FiltersStyle.module.css'

function HomeView() 
{
  const Products=useFetch('https://fake-products.herokuapp.com/products')
  
  return (
    <ProductContainer>
      {
        Products.length>1?
          <ProductListView data={Products}/>
        :
          <div className={styles.Loading}>
              <img src={loading} alt='' className={styles.LoadingImg}/>
          </div>
      }
    </ProductContainer>
  );
}


const ProductContainer=styled.section`
padding:50px;
display:flex;
justify-content:center;
align-items:center;
flex-wrap:wrap
`

export default HomeView;
