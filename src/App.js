import NavView from "./components/Nav/NavView";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

import LoginView from "./pages/Login/LoginView";
import HomeView from "./pages/Home/HomeView";
import CatagoriesView from "./pages/Catagories/CatagoriesView";
import CartView from "./pages/Cart/CartView";
import FiltersView from "./pages/Filters/FiltersView";
import ProductDiscriptionView from "./pages/productDiscription/ProductDiscriptionView";
import WatchListView from "./pages/WatchList/WatchListView";


function App() {
  return (
    <Router>
      <div className="App">
        <NavView/>
        <Routes>
          <Route path="/" element={<HomeView/>}/>
          <Route path="/cart" element={<CartView/>}/>
          <Route path="/filters" element={<FiltersView/>}/>
          <Route path="/watchlist" element={<WatchListView/>}/>
          <Route path="/products/:id" element={<ProductDiscriptionView/>}/>
          <Route path="/login" element={<LoginView/>}/>
          <Route path="/Catagories" element={<CatagoriesView/>}/>
        </Routes>
      </div>
    </Router>
  );
}


export default App;
