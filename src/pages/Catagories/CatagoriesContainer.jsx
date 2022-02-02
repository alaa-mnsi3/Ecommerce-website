import { useEffect,useState} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import {getCatagoriesApi} from '../../store/Slices/Catagory/CatagoryThunkAPI/getCatagoryApi';

function CatagoriesContainer() {
    const dispatch =useDispatch();
    const {catagories,loading} = useSelector(state => state.CatagSlice);
    const {userName} =useSelector(state => state.Auth)
    const [deleteCatag,setDeleteCatag] = useState(false);
    const [addCatag , setAddCatag] = useState(false)
    const [editCatagory,setEditCatagory] = useState(false)
    const [idCatagory,setIdCatagory] = useState(0)
    const [catagory,setCatagory] = useState(null)

    // For open Component Deleting Catagory
    const handleDeleteCatagory=(id)=>
    {
        setIdCatagory(id);
        setDeleteCatag(true);
    }

    // For open Component Adding Catagory
    const handleAddCatagory=()=>
    {
        setAddCatag(true);
    }

    // For open Component Editing Catagory
    const handleEditedCatagory =(catagory)=>
    {
        setCatagory(catagory)
        setEditCatagory(true);
    }
    
    useEffect(()=>
    {
        dispatch(getCatagoriesApi())
    },[])

    return {catagories,loading,deleteCatag,addCatag,userName,editCatagory,idCatagory,catagory,setEditCatagory,setAddCatag,setDeleteCatag,handleEditedCatagory,handleAddCatagory,handleDeleteCatagory}
}

export default CatagoriesContainer;
