import React,{useState} from 'react';
import { useSelector,useDispatch } from 'react-redux';
import {LogOut} from '../../store/Slices/Auth/AuthSlice'


function NavContainer() {
    const [Toggle,setToggle]=useState(false) 
    const {QCart}= useSelector(state => state.cart);
    const {watchLists} = useSelector(state => state.WatchListsSlice)
    const {enableLogin,userName}= useSelector(state => state.Auth)
    const dispatch =useDispatch()

    // For mobile Toggle in Nav
    const handleToggleNav = () =>
    {
        setToggle(!Toggle)
    }

    // For logout user
    const handleLogOut =()=>
    {
         dispatch(LogOut())
    }

    return {handleLogOut,handleToggleNav,enableLogin,userName,QCart,watchLists,Toggle}
}

export default NavContainer;
