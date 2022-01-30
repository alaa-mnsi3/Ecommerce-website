import { createSlice } from "@reduxjs/toolkit";


const initialState={products:[], QCart: 0 ,TotalPrice:0}

const cartSlice = createSlice({
    name:'AddToCart',
    initialState,
    reducers:{
        AddCart:(state,action)=>
        {
            const existingProduct = state.products.find(item => {return item.id===action.payload.product.id});

            if(existingProduct)
            {
                existingProduct.Quantity += action.payload.Quantity;
            }
            else
            {
                action.payload.product.Quantity = action.payload.Quantity;
                state.products.push(action.payload.product);
            }

            let TotalQuantity = state.QCart;
            let price = state.TotalPrice;

            TotalQuantity += action.payload.Quantity;
            price += (action.payload.Quantity * Math.round(action.payload.product.priceProduct));

            state.QCart=TotalQuantity;
            state.TotalPrice=price;
        },
        RemoveForomCart:(state,action) =>
        {
            let products = state.products;
            let totalCart = state.QCart;
            let PriceOfProducts = state.TotalPrice;
            const existingProduct = state.products.find(item => {return item.id===action.payload});

            totalCart -= existingProduct.Quantity;
            PriceOfProducts -= existingProduct.Quantity * Math.round(existingProduct.priceProduct);

            state.TotalPrice= PriceOfProducts;
            state.QCart=totalCart;

            products = products.filter(product => product.id !== action.payload);
            state.products = products
        }
    }
})

export default cartSlice.reducer;
export const {AddCart,RemoveForomCart}=cartSlice.actions;