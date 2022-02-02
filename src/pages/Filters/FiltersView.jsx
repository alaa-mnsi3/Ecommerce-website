import React from 'react';

// to print products that filtering
import ProductListView from '../../components/productList/ProductListView'

// For Select in this Component
import Select from '../../components/Select/SelectView';
import {selectCompany, selectOrder} from '../../Constants';

// the Part of Logic in this Component
import FiltersContainer from './FiltersContainer';

// Styling
import styles from './FiltersStyle.module.css';
import loading from '../../images/animal-1.1s-200px.png'

function FiltersView() {

  const {handleFilterCompany,handleChecked,filterSearch,filterRatingPrice,
    categories,products,LoadingData,handleSearchFilter,handlePriceFilter,
    handleSortFilter} = FiltersContainer()
 
  return(
    <section>

      {/* Search */}
      <div className={styles.parentFilterSearch}>
        <input type='text' className={styles.filterSearch} placeholder='Search....' value={filterSearch} onChange={(e)=>handleSearchFilter(e)}/>
      </div>

      <div className={styles.ProductSec}>
        <form className={styles.ProductFilter} onSubmit={(e)=>e.preventDefault()}>

          {/* CheckBox */}
          {categories?.map(item => (
            <div className={styles.filterCheck} key={item.id}>
                <input type='checkbox' className={styles.Checkbox} checked={item.checked} onChange={() => handleChecked(item.id)}/>
                <label>{item.label}</label>
            </div>
          ))}

          {/* selectbox */}
          <Select data={selectCompany} handleChange={handleFilterCompany} />
          <Select data={selectOrder} handleChange={handleSortFilter}/>

          {/* range of Price */}
          <p className={styles.range}>${parseInt(filterRatingPrice[1])}.00</p>
          <input type="range" min='40' max='600' value={parseInt(filterRatingPrice[1])} onChange={(e)=>handlePriceFilter(e)}/>
        
        </form>

        <div className={styles.ProductContainer} style={{display:'flex',flexWrap:'wrap'}}>
          {
            !LoadingData? 
              // when fetching is late
              <div className={styles.Loading}>
                <img src={loading} alt='' className={styles.LoadingImg}/>
              </div> 
              :
              // when fetching is fulfilled
              <div className={styles.ProductContainer}>
                <ProductListView active={false}  num={products.length}  data={products}/>
              </div>
          }
        </div>
      </div>
    </section>
  );
}

export default FiltersView;
