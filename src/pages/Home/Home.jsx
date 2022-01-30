import React from 'react';
import styled from 'styled-components';
import ProductList from '../../components/productList/ProductList';
import useFetch from '../../custom Hook/useFetch';

const ProductContainer=styled.section`
padding:50px;
display:flex;
justify-content:center;
align-items:center;
flex-wrap:wrap
`
function Home() {
  const Products=useFetch('http://localhost:4005/products')
  return (
    <ProductContainer>
      <ProductList data={Products}/>
    </ProductContainer>
  );
}

export default Home;
