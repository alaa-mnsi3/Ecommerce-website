import React from 'react';
import styled from 'styled-components';

// Logic for this Component
import AddCatagoryContainer from './AddCatagoryContainer'

function AddCatagoryView({setAddCatag}) 
{
    const {handleSubmitAddCatagory,handleSetCatagoryDiscription,handleSetCatagoryImage,handleSetCatagoryName,CatagoryName,CatagoryDiscription}=AddCatagoryContainer(setAddCatag)
  return (
      <AddCatagorySection>
        <AddCatagoryWrapper onSubmit={(e)=>handleSubmitAddCatagory(e)}>
            <input type='text' value={CatagoryName} required onChange={(e)=>handleSetCatagoryName(e.target.value)} placeholder='CatagoryName'/>
            <input type='file' required  onChange={(e)=>handleSetCatagoryImage(e)}/>
            <textarea placeholder='Discription' required value={CatagoryDiscription} onChange={(e)=>handleSetCatagoryDiscription(e.target.value)}/>
            <button>Add Catagory</button>
        </AddCatagoryWrapper>
      </AddCatagorySection>
  );
}


// Styling
const AddCatagorySection=styled.section`
position:absolute;
top:0;
left:0;
width:100vw;
min-width:100vw;
display:flex;
align-items:center;
justify-content:center;
min-height:100vh;
background-color:rgba(0,0,0,0.3);
`
const AddCatagoryWrapper=styled.form`
background-color:#fff;
padding:2rem;
border-radius:10px;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
input,textarea
{
    font:600 .8rem 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color :rgb(117 54 175);
    border:1px solid rgb(85, 26, 139);
    background-color:transparent;
    color:rgb(114 55 169);
    margin-bottom:1.5rem;
    padding:.5rem 1rem;
    border-radius:5px;
    box-shadow:0px 0px 10px rgba(0,0,0,.2);
    outline:none;
    &:focus
    {
        outline:none;
    }
    ::placeholder
    {
        color:rgb(114 55 169);
        text-transform:capitalize;
    }
    @media only screen and (max-width:500px)
    {
        width:250px;
    }
}
button
{
    background-color :rgb(117 54 175);
    color:#fff;
    padding:.6rem 2rem;
    margin-top:2rem;
    border-radius:5px;
}
`
export default AddCatagoryView;
