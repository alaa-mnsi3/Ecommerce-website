import React from 'react';
import {useSelector} from 'react-redux';
import CartItems from './CartItems/CartItems';
import styled from 'styled-components';

function CartView() 
{
  // products that stored in redux that added to the cart
  const {products,TotalPrice} = useSelector(state => state.cart)
  return( 
    <section>
      {
        products.length ?
        <CartItems data={products} TotalPrice={TotalPrice} Cart={true}/>
      : 
        <NoItems>No Items in Cart</NoItems>
      }
    </section>
  );
} 

// Styles
export const NoItems =styled.p`
text-align:center;
margin:auto;
height:100vh;
font:600 1.5rem 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
line-height:100vh;
color:rgb(212, 178, 243);
text-transform:capitalize;
background-color:rgb(85, 26, 139);
`
export default CartView;
