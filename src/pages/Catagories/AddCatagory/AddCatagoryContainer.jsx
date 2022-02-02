import {useState}  from 'react';
import { AddCatagoryApi } from '../../../store/Slices/Catagory/CatagoryThunkAPI/addCatagoryApi';
import {useDispatch} from 'react-redux';

function AddCatagoryContainer({setAddCatag}) {
    const [CatagoryName,setCatagoryName]=useState('')
    const [CatagoryImage,setCatagoryImage]=useState('')
    const [CatagoryDiscription,setCatagoryDiscription]=useState('')

    const dispatch =useDispatch()
    const handleSetCatagoryName =(value)=>
    {
        if(value)
        {
         setCatagoryName(value)
        }
    }
    const handleSetCatagoryImage =(e)=>
    {
       let files =e.target.files
       let fileReader=new FileReader();
       fileReader.readAsDataURL(files[0])
       fileReader.onload=(e)=>
       {
        setCatagoryImage(e.target.result)
       }
    }
    const handleSetCatagoryDiscription =(value)=>
    {
        if(value)
        {
         setCatagoryDiscription(value)
        }
    }
    const handleSubmitAddCatagory =(e)=>
    {
        e.preventDefault();
        let data={categoryName:CatagoryName,imageSrc:CatagoryImage,Discription:CatagoryDiscription};
        dispatch(AddCatagoryApi(data))
        setAddCatag(false)
    }

    return {handleSubmitAddCatagory,handleSetCatagoryDiscription,handleSetCatagoryImage,handleSetCatagoryName,CatagoryName,CatagoryDiscription}
}

export default AddCatagoryContainer;
