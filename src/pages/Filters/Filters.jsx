import React from 'react';
import ProductList from '../../components/productList/ProductList'
import Select from '../../components/Select/Select';
import {selectCompany, selectOrder} from '../../Constants';
import ProController from './FilterContainer';
import styles from './Filters.module.css';
import loading from '../../images/animal-1.1s-200px.png'

function Filter() {

  const {handleFilterCompany,handleChecked,filterSearch,filterRatingPrice,
    categories,products,LoadingData,handleSearchFilter,handlePriceFilter,
    handleSortFilter} = ProController()
 
  return(
    <section>

      <div className={styles.parentFilterSearch}>
        <input type='text' className={styles.filterSearch} placeholder='Search....' value={filterSearch} onChange={(e)=>handleSearchFilter(e)}/>
      </div>

      <div className={styles.ProductSec}>
        <form className={styles.ProductFilter} onSubmit={(e)=>e.preventDefault()}>
          {categories.map(item => (
            <div className={styles.filterCheck} key={item.id}>
                <input type='checkbox' className={styles.Checkbox} checked={item.checked} onChange={() => handleChecked(item.id)}/>
                <label>{item.label}</label>
            </div>
          ))}

          <Select data={selectCompany} handleChange={handleFilterCompany} />
          <Select data={selectOrder} handleChange={handleSortFilter}/>
          
          <p className={styles.range}>${parseInt(filterRatingPrice[1])}.00</p>
          <input type="range" min='40' max='600' value={parseInt(filterRatingPrice[1])} onChange={(e)=>handlePriceFilter(e)}/>
        </form>

        <div className={styles.ProductContainer} style={{display:'flex',flexWrap:'wrap'}}>
          {
            !LoadingData? 
              <div className={styles.Loading}>
                <img src={loading} alt='' className={styles.LoadingImg}/>
              </div> 
              :
              <div className={styles.ProductContainer}>
                <ProductList active={false}  num={products.length}  data={products}/>
              </div>
          }
        </div>
      </div>
    </section>
  );
}

export default Filter;
