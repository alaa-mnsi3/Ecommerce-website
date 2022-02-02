import React from 'react';
import CartListView from '../../../components/CartList/CartListView';
import styled from 'styled-components';

function CartItems({data,TotalPrice,Cart}) 
{
  return (
    <ParentCard>
        {/* Items in cart */} 
        <CartListView data={data} Cart={Cart}/>

        {/* Total Price */}
        <TotalPriceWrapper>
            TotalPrice : <TotalPrice>${TotalPrice}.00</TotalPrice>
        </TotalPriceWrapper>

    </ParentCard>
  );
}


// Styles
const ParentCard=styled.div`
position:relative
`
const TotalPrice= styled.span`
font:700 1.2rem/2rem 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
color:rgb(119, 36, 196);
@media only screen and (max-width:555px) {
  font:700 .9rem/1rem 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
`
const TotalPriceWrapper= styled.span`
font:500 .8rem/2rem 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
color:rgb(164, 108, 216);
width: 50%;
margin:2rem auto;
@media only screen and (max-width:990px) {
  width:65%;
}
@media only screen and (max-width:768px) {
  width:85%;
}
@media only screen and (max-width:555px) {
  width:95%;
  line-height:1rem;
}
`

export default CartItems;
