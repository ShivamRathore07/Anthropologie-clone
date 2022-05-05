import { Route, Routes } from 'react-router-dom';
import './App.css';
import ProductsPage from './pages/ProductsPage';
import Cartpage from './pages/Cartpage';
import Navbar from './components/Navbar';
import SingleproductPage from './pages/SingleproductPage';


function App() {
  return (
    <div className="App">
    
     <Routes>
     <Route path="/" element={<Navbar/>}></Route>
        <Route path="cart" element={<Cartpage/>}></Route>
        <Route path=":products" element={<ProductsPage/>}></Route>
        <Route path=":products/:id" element={<SingleproductPage/>}></Route>
     </Routes>
    </div>
  );
}

export default App;
