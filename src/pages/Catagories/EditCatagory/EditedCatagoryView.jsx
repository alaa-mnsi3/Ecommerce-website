import React from 'react';
import styled from 'styled-components';

// Logic for this Component
import EditCatagoryContainer from './EditCatagoryContainer'

function EditedCatagory({catagory,setEditCatagory}) 
{
    const {handleEditImage,handleEditName,handleCancelEdited,handleSubmitEdited,handleEditDiscrip,EditedImage,EditedName,EditedDiscription}=EditCatagoryContainer({catagory,setEditCatagory})
    
    return (
        <AddCatagorySection>
            <AddCatagoryWrapper onSubmit={(e)=> e.preventDefault()}>
                <input type='text'  required  value={EditedName} onChange={(e)=>handleEditName(e.target.value)}/>
                <label>Image Source:- {EditedImage}</label>
                <div className='UploadBtnWrapper'>
                    <label className='UploadBtn' for='upload'>Upload File</label>
                    <input type='file' required id='upload' onChange={(e)=>handleEditImage(e)}/>
                </div>
                <textarea placeholder='Discription' required value={EditedDiscription} onChange={(e)=>handleEditDiscrip(e.target.value)}/>
                <div>
                    <button type='submit' onClick={()=>handleSubmitEdited()}>Edited</button>
                    <button onClick={()=>handleCancelEdited()}>Cancel</button>
                </div>
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
.UploadBtnWrapper
{
    position:relative;
    margin:1rem 0;
}
.UploadBtn
{
    font:600 .8rem 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background-color :rgb(117 54 175);
    color:#fff;
}
input[type='file']
{
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    border:none;
    background-color:transparent;
    color:none;
    box-shadow:0px 0px 10px rgba(0,0,0,0);
}
label
{
    font:600 .8rem 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    word-break: break-word;
    max-width: fit-content;
    text-align: center;
    margin-bottom: 1rem;
    background-color: #d9c4ef;
    padding: 1rem;
    border-radius: 10px;
    color: #50107e;
    max-height: 113px;
    overflow: auto;
}
textarea
{
    margin:1rem 0;
    min-width:300px;
    min-height:90px;
    max-width:400px;
    max-height:100px;
    word-break: break-word;
    @media only screen and (max-width:500px)
    {
        min-width:250px;
        max-width:250px;
    }
}
button
{
    background-color :rgb(117 54 175);
    color:#fff;
    padding:.6rem 2rem;
    margin-top:1.5rem;
    border-radius:5px;
    margin-right:1rem;
    &:last-of-type
    {
        margin-right:0;
    }
}
`
export default EditedCatagory;
