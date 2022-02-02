import {useState} from 'react';
import {useDispatch} from 'react-redux'
import { EditCatagoryApi } from '../../../store/Slices/Catagory/CatagoryThunkAPI/editCatagoryApi';

function EditCatagoryContainer({catagory,setEditCatagory}) 
{
    const dispatch = useDispatch()
    const [EditedName,setEditedName]=useState(catagory.categoryName)
    const [EditedImage,setEditedImage]=useState(catagory.imageSrc)
    const [EditedDiscription,setEditedDiscription]=useState(catagory.Discription)

    // for input Name of Catagory
    const handleEditName=(value)=>
    {
        setEditedName(value)
    }

    // for input Image of Catagory
    const handleEditImage=(e)=>
    {
        let files=e.target.files;
        let fileReader=new FileReader();
        fileReader.readAsDataURL(files[0]);
        fileReader.onload=(e)=>
        {
            setEditedImage(e.target.result)
        }
    }

    // for input Discription of Catagory
    const handleEditDiscrip=(value)=>
    {
        setEditedDiscription(value)
    }

    // For Editing
    const handleSubmitEdited=(e)=>
    {
        let EditedData={id:catagory.id,categoryName:EditedName,imageSrc:EditedImage,Discription:EditedDiscription}
        dispatch(EditCatagoryApi(EditedData))   
        setEditCatagory(false)
    }

    // For CancelEditing
    const handleCancelEdited=(e)=>
    {   
        setEditCatagory(false)
    }

    return {handleEditImage,handleEditName,handleCancelEdited,handleSubmitEdited,handleEditDiscrip,EditedImage,EditedName,EditedDiscription}
}


export default EditCatagoryContainer;
