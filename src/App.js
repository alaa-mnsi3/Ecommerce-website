import Nav from "./components/Nav/Nav";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from "./pages/Home/Home";
import ProductDisc from "./pages/productDiscription/ProductDisc";
import Cart from "./pages/Cart/cart";
import Filter from "./pages/Filters/Filters";
import WatchList from "./pages/WatchList/WatchList";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav/>
        <Routes>
          <Route exact path="/" element={<Home/>}>
          </Route>
          <Route path="/cart" element={<Cart/>}/>
          <Route exact path="/filters" element={<Filter/>}/>
          <Route exact path="/watchlist" element={<WatchList/>}/>
          <Route path="/products/:id" element={<ProductDisc/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
