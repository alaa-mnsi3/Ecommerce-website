import React from 'react';
import styled from 'styled-components';

// Fontaswome
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

// Components
import DeleteCatagoryView from './DeleteCatagory/DeleteCatagoryView';
import AddCatagoryView from './AddCatagory/AddCatagoryView';
import EditedCatagoryView from './EditCatagory/EditedCatagoryView';

// for Styling Loading
import styles from '../Filters/FiltersStyle.module.css';
import LoadImage from '../../images/animal-1.1s-200px.png';

// forlogic this Component
import CatagoriesContainer from './CatagoriesContainer';

function CatagoriesView() 
{
  const {catagories,loading,deleteCatag,userName,addCatag,editCatagory,idCatagory,catagory,setEditCatagory,setAddCatag,setDeleteCatag,handleEditedCatagory,handleAddCatagory,handleDeleteCatagory} = CatagoriesContainer();

  return (
    <>
    {
      !loading?
        <TabelContainer>
          {userName &&<AddCatatagory onClick={()=>handleAddCatagory()}>Add Catagory</AddCatatagory>}
          <Table>
            <thead>
              <tr>
                <th>n.</th>
                <th>Name</th>
                <th>Image</th>
                <th>Discription</th>
                {
                  userName && <th>Actions</th>
                }
              </tr>
            </thead>
            <tbody>
              {catagories.map((catagory,index) => (
                <tr key={catagory.id}>
                  <td>{index + 1}</td>
                  <td>{catagory.categoryName}</td>
                  <td><img src={catagory.imageSrc} alt='Catagory Image'/></td>
                  <td>{catagory.Discription}</td>

                  {userName && 
                    <td>
                      <button onClick={()=>handleDeleteCatagory(catagory.id)}><FontAwesomeIcon icon={faTrash}/></button>
                      <button><FontAwesomeIcon icon={faEdit} onClick={()=>handleEditedCatagory(catagory)}/></button>
                    </td>
                  }
                </tr>
              ))}
            </tbody>
          </Table>
        </TabelContainer>
        :
        <div className={styles.Loading}>
          <img src={LoadImage} alt='' className={styles.LoadingImg}/>
        </div>
    }

    {deleteCatag&& <DeleteCatagoryView idCatagory={idCatagory} setDeleteCatag={setDeleteCatag}/>}
    {addCatag && <AddCatagoryView setAddCatag={setAddCatag}/>}
    {editCatagory && <EditedCatagoryView catagory={catagory} setEditCatagory={setEditCatagory}/>}
    </>
  );
}

// Styling
const TabelContainer= styled.section`
  margin:4rem 0;
  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction:column;
`
const Table= styled.table`
  border:1px solid rgb(85, 26, 139);
  overflow:scroll;
  th,td
  {
    border:1px solid rgb(85, 26, 139);
    padding:.5rem 1rem;
    @media only screen and (max-width:500px)
    {
      padding:.3rem ;
    }
  }
  th
  {
    font:700 1rem 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color :rgb(52 8 92);
    text-transform:capitalize;
  }
  td
  {
    font:600 .8rem 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color :rgb(117 54 175);
    text-transform:capitalize;
    text-align: center;
    max-width:400px;
    max-height:100px;
    word-break: break-word;
    button
    {
      color :rgb(117 54 175);
      width:20px;
      height:20px;
    }
    img
    {
      width:80px;
      height:80px;
      object-fit:cover;
      object-position:top;
      @media only screen and (max-width:500px)
      {
        width:50px;
        height:50px;
      }
    }
    @media only screen and (max-width:500px)
    {
      font:500 .5rem 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      width:50px;
      max-width:80px;
    }
  }
`
const AddCatatagory= styled.button`
background-color :rgb(117 54 175);
color:#fff;
padding:.6rem 2rem;
margin-bottom:2rem;
border-radius:5px;
`
export default CatagoriesView;


