import React from 'react';
import styled from 'styled-components';

// logic for this Component
import DeleteCatagoryContainer from './DeleteCatagoryContainer'

function DeleteCatagory({setDeleteCatag,idCatagory}) 
{
    const {handleUnDelete,handleSureDeleting}=DeleteCatagoryContainer({setDeleteCatag,idCatagory})

    return (
        <DeleteModel>
            <DeleteModelWrapper>
                        <p>Are you sure that you want to delete catagory?</p>
                        <div>
                            <button onClick={()=>handleSureDeleting()}>Yes</button>
                            <button onClick={()=>handleUnDelete()}>No</button>
                        </div>
            </DeleteModelWrapper>
        </DeleteModel>
    )
}
 
const DeleteModel=styled.section`
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
const DeleteModelWrapper=styled.div`
background-color:#fff;
padding:2rem;
border-radius:10px;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
p
{
    font:600 1rem 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color :rgb(117 54 175);
}
button
{
    background-color :rgb(117 54 175);
    color:#fff;
    padding:.6rem 2rem;
    margin-top:2rem;
    border-radius:5px;
    margin-right:1rem;
    &:last-of-type
    {
        margin-right:0;
    }
}
`

export default DeleteCatagory;
