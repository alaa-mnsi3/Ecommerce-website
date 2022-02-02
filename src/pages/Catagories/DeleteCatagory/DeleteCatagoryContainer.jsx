import { deleteCatagoryApi } from '../../../store/Slices/Catagory/CatagoryThunkAPI/deleteCatagoryApi';
import {useDispatch} from 'react-redux';

function DeleteCatagoryContainer({setDeleteCatag,idCatagory}) {
    const dispatch = useDispatch()

    // to Cancel Deleting
    const handleUnDelete=()=>
    {
        setDeleteCatag(false)
    }

    // for Deleting Catagory from Api
    const handleSureDeleting=()=>
    {
        dispatch(deleteCatagoryApi(idCatagory))
        setDeleteCatag(false)
    }

    return {handleUnDelete,handleSureDeleting}
}

export default DeleteCatagoryContainer;
