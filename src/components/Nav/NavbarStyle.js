import styled from 'styled-components';

export const Navbar = styled.section`
height:90px;
position:sticky;
background-color:#fff;
box-shadow:0px 0px 10px rgba(0,0,0,.3);
padding:30px;
top:0px;
z-index:1000;
display:flex;
align-items: center;
.LogOut
{
    background-color: rgb(85 26 139);
    color: #fff;
    font:500 .9rem 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    border-radius:5px;
    text-transform:capitalize;
    padding:.5rem 1rem;
    margin-left:.5rem;
}
.user
{
    color:rgb(85 26 139);
    font:700 .9rem 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    text-transform:capitalize;
}
a
{
    text-decoration:none;
    position:relative;
}
ul
{
    display:flex;
    align-items:center;
}
li
{
    list-style:none;
    margin-right:30px;
    &:last-of-type
    {
        margin-right:0px;
        position:relative;
    }
    a
    {
        color:rgba(0,0,0,0.5);
        transition:color 300ms ease-in-out;
    }
    a:hover
    {
        color:rgb(85, 26, 139);
    }
}
.login
{
    @media only screen and (max-width:990px)
    {
        display:none;
    }
}
`
export const NavItems = styled.ul`
display:flex;
align-items:center;
flex:1;
margin-left:2rem;
@media only screen and (max-width:990px)
{
    position: absolute;
    top: 100%;
    left: 0;
    flex-direction: column;
    flex: 1;
    padding: 1rem;
    align-items: baseLine !important;
    margin-left: 0;
    width: 100%;
    background-color:white;
    opacity:0;
    transform-origin:top;
    transform:translateY(-100px);
    pointer-events:none;
    transition:all 400ms ease-in-out;

    &.active
    {
        transform:translateY(0px);
        opacity:1;
        pointer-events:visible;
    }
}
`
export const NavItem = styled.li`
list-style:none;
margin-right:30px;
position:relative;
&::before
{
    content:"";
    position:absolute;
    bottom:-6px;
    left:0;
    transform:scaleX(0);
    transform-origin:left center;
    background-color:rgb(85, 26, 139);
    height:3px;
    opacity:0;
    border-radius:15%;
    transition:all 400ms ease-in-out;
    width:100%;
}
&:hover::before
{
    opacity:1;
    transform:scaleX(1);
}
&:last-of-type
{
    display:none;
}
@media only screen and (max-width:990px)
{
    margin-bottom:1rem;
    &:last-of-type
    {
        display:inline-block;
    }
}
`
export const Quantity = styled.span`
position:absolute;
top:-10px;
right:-10px;
width:20px;
height:20px;
line-height:20px;
text-align:center;
border-radius:50%;
background-color:rgb(85, 26, 139);
color:#fff;
`
export const NavToggle = styled.button`
border:none;
outline:none;
min-width:20px;
height:auto;
flex:1;
cursor:pointer;
margin-bottom:5px;
span
{
    display:inline-block;
    position:relative;
    min-width:20px;
    background-color:black;
    height:2px;
    z-index:1;
    &::after , &::before
    {
        content:'';
        width:100%;
        background-color:black;
        height:2px;
        position:absolute;
        left:0;
        z-index:-1;
    }
    &::after
    {
        top:5px;
    }
    &::before
    {
        top:-5px;
    }
}
@media only screen and (min-width:990px)
{
    display:none;
}
`
