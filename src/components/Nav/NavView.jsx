import React from 'react';
import {Link} from 'react-router-dom';

// Fontaswome
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHeart, faShoppingCart} from '@fortawesome/free-solid-svg-icons';

// styles for this Component
import {Navbar, NavItems,NavItem,Quantity ,NavToggle} from './NavbarStyle';

// for Logic this Component
import NavContainer from './NavContainer'

function NavView() 
{  
    const {handleLogOut,handleToggleNav,enableLogin,userName,QCart,watchLists,Toggle} = NavContainer()
  
    return (
        <Navbar>
            <Link to="/">
                <h1>
                    E-commerce
                </h1>
            </Link>
            <NavToggle onClick={()=>handleToggleNav()}>
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
                    {!enableLogin?
                    <Link to="/Login">
                        Login
                    </Link>:
                    <div>
                        <span className="user">{userName}</span>
                        <button className='LogOut' onClick={()=> handleLogOut()}>LogOut</button>
                    </div>}
                </NavItem>
            </NavItems>
            <ul>
                <li className="login">
                    {!enableLogin?
                        <Link to="/Login">
                            Login
                        </Link>:
                        <div>
                            <span className="user">{userName}</span>
                            <button className='LogOut' onClick={()=> handleLogOut()}>LogOut</button>
                        </div>
                    }
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
    )
}

export default NavView;
