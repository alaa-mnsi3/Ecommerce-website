import useFetch from '../../Custom Hook/useFetch';
import {useState ,useEffect,useLayoutEffect} from 'react';

import {useDispatch,useSelector} from 'react-redux';
import {getCatagoriesApi} from '../../store/Slices/Catagory/CatagoryThunkAPI/getCatagoryApi';

function FiltersContainer() {
    const Items = useSelector(state => state.CatagSlice.catagories)
    const dataList =useFetch('https://fake-products.herokuapp.com/products')
    const [products,setProducts]=useState(dataList)
    const [categories,setCategories]=useState(null)
    const [company,setCompany] =useState('All')
    const [sorting,setSorting] =useState(null)
    const [filterSearch,setFilterSearch]=useState('')
    const [filterRatingPrice,setFilterRatingPrice]=useState(['20','700'])
    const [LoadingData,setLoadingData] = useState(false);
    const dispatch =useDispatch()

  
    // for CheckBox
    const handleChecked = (id) =>
    { 
      const checkedCatagory= categories;
      const updatedCheckedList = checkedCatagory.map(catagory => catagory.id === id ? {...catagory , checked:!catagory.checked} : catagory)
      setCategories(updatedCheckedList)
    }
    
    // for Select Company
    const handleFilterCompany =(value) =>
    {
      return !value? null : setCompany(value)
    }
    
    // for Sorting the Products
    const handleSortFilter =(value) =>
    {
      return !value? null : setSorting(value)
    }
    
    // for Search 
    const handleSearchFilter =(e) =>
    {
      const value = e.target.value
      setFilterSearch(value)
    }
    
    // For Range Price
    const handlePriceFilter =(e)=>
    {
      const value= e.target.value;
      setFilterRatingPrice(['40',value.toString()])
    }
    
    // Filters depend on all pervious
    const handlefilters = () =>
    {
      let WrappedDataList = dataList;
  
      //checkbox
      const CheckedData = categories?.filter(item => item.checked == true).map(item => item.label)
      if(CheckedData?.length)
      {
        WrappedDataList=WrappedDataList.filter(product => CheckedData.includes(product.categoryName))
      }
  
      //filterCompany
      if(company)
      {
        switch(company)
        {
          case 'All':
            if(CheckedData?.length)
            {
              WrappedDataList=WrappedDataList.filter(product => CheckedData.includes(product.categoryName))
            }
            else
            {WrappedDataList =dataList}
            break;
          default:
            WrappedDataList = WrappedDataList.filter(product => product.companyName === company)
            break;
        }
      }
  
      // Sorting
      if(sorting)
      {
        switch(sorting)
        {
          case 'Asec Order':
            WrappedDataList = WrappedDataList.sort((a,b) => {return a.productName.toLowerCase() < b.productName.toLowerCase() ? -1 : 1})
            break;
          case 'Desc Order':
            WrappedDataList = WrappedDataList.sort((a,b) => {return a.productName.toLowerCase() > b.productName.toLowerCase() ? -1 : 1})
            break;
          case 'Desc Price':
            WrappedDataList = WrappedDataList.sort((a,b) => {return a.priceProduct - b.priceProduct})
            break;
          case 'Desc Price':
            WrappedDataList = WrappedDataList.sort((a,b) => {return b.priceProduct - a.priceProduct})
            break;
          default :
            break;
        }
      }
  
      //search
      if(filterSearch)
      {
        WrappedDataList = WrappedDataList.filter(item => item.productName.toLowerCase().search(filterSearch.toLowerCase().trim()) > -1 )
      }
  
      //Price Rating
      if(filterRatingPrice)
      {
        WrappedDataList = WrappedDataList.filter(product => product.priceProduct > parseInt(filterRatingPrice[0]) && product.priceProduct < parseInt(filterRatingPrice[1]))
      }
  
      setProducts(WrappedDataList)
  
      if(!WrappedDataList.length) {setLoadingData(false)} else {setLoadingData(true)}
    }

    // for Filters
    useEffect(()=>
    {
      handlefilters();
    },[categories,company,sorting,filterSearch,filterRatingPrice,dataList])

    // for CheckBox
    useLayoutEffect(()=>{
      dispatch(getCatagoriesApi())
      let catagory=[];
      Items.map((Item,index) =>{
        return (
        catagory=[...catagory,{id:(index+1),checked:false,label:Item.categoryName}]
      )})
      setCategories(catagory)
    },[])
    
  return {handleFilterCompany,handleChecked,categories,products,filterSearch,filterRatingPrice,
    LoadingData,handleSearchFilter,handlePriceFilter,handleSortFilter};
}

export default FiltersContainer;