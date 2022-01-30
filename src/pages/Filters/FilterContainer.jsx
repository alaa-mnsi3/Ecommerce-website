import useFetch from '../../custom Hook/useFetch';
import {useState ,useEffect} from 'react';

function ProController() {
    const dataList =useFetch('http://localhost:4005/products')
    const [products,setProducts]=useState(dataList)
    const [categories,setCategories]=useState([
      {id:1,checked:false,label:'man'},
      {id:2,checked:false,label:'Woman'},
      {id:3,checked:false,label:'Kids'},
    ])
    const [company,setCompany] =useState('All')
    const [sorting,setSorting] =useState(null)
    const [filterSearch,setFilterSearch]=useState('')
    const [filterRatingPrice,setFilterRatingPrice]=useState(['40','600'])
    const [LoadingData,setLoadingData] = useState(false);
  
  
    const handleChecked = (id) =>
    { 
      const checkedCatagory= categories;
      const updatedCheckedList = checkedCatagory.map(catagory => catagory.id === id ? {...catagory , checked:!catagory.checked} : catagory)
      setCategories(updatedCheckedList)
    }
  
    const handleFilterCompany =(e,value) =>
    {
      return !value? null : setCompany(value)
    }
  
    const handleSortFilter =(e,value) =>
    {
      return !value? null : setSorting(value)
    }
  
    const handleSearchFilter =(e) =>
    {
      const value = e.target.value
      setFilterSearch(value)
    }
    
    const handlePriceFilter =(e)=>
    {
      const value= e.target.value;
      setFilterRatingPrice(['40',value.toString()])
    }
  
    const handlefilters = () =>
    {
      let WrappedDataList = dataList;
      console.log(dataList)
  
      //checkbox
      const CheckedData = categories.filter(item => item.checked == true).map(item => item.label)
      if(CheckedData.length)
      {
        WrappedDataList=WrappedDataList.filter(product => CheckedData.includes(product.categoryName))
      }
  
      //filterCompany
      if(company)
      {
        switch(company)
        {
          case 'All':
            if(CheckedData.length)
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

    useEffect(()=>
    {
      handlefilters();
    },[categories,company,sorting,filterSearch,filterRatingPrice,dataList])

  
  return {handleFilterCompany,handleChecked,categories,products,filterSearch,filterRatingPrice,
    LoadingData,handleSearchFilter,handlePriceFilter,handleSortFilter};
}

export default ProController;