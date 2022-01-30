import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faHeart, faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import Navbar , { NavItems,NavItem,Quantity ,NavToggle} from './NavbarStyle';
import { useSelector } from 'react-redux';

function Nav() 
{
   const [Toggle,setToggle]=useState(false) 
   const {QCart}= useSelector(state => state.cart);
   const {watchLists} = useSelector(state => state.WatchListsSlice)
   
  return (
    <Navbar>
        <Link to="/">
            <h1>
                E-commerce
            </h1>
        </Link>
        <NavToggle onClick={()=>setToggle(!Toggle)}>
            <span></span>
        </NavToggle>
        <NavItems className={Toggle && 'active'}>
            <NavItem>
                <Link to="/">
                    Home
                </Link>
            </NavItem>
            <NavItem>
                <Link to="/Catagories">
                    Catagories
                </Link>
            </NavItem>
            <NavItem>
                <Link to="/filters">
                    Filter
                </Link>
            </NavItem>
            <NavItem>
                <Link to="/Login">
                    Login
                </Link>
            </NavItem>
        </NavItems>
        <ul>
            <li className="login">
                <Link to="/Login">
                    Login
                </Link>
            </li>
            <li>
                <Link to="/watchlist">
                    <FontAwesomeIcon icon={faHeart} />
                    <Quantity>
                        {watchLists.length}
                    </Quantity>
                </Link>
            </li>
            <li>
                <Link to="/cart">
                    <FontAwesomeIcon icon={faShoppingCart}/>
                    <Quantity>
                        {QCart}
                    </Quantity>
                </Link>
            </li>
        </ul>   
    </Navbar>
)}

export default Nav;
