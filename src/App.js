import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.scss'
import Home from "./components/Home";
import Nav from "./components/Nav";
import CategoryPage from "./components/CategoryPage";
import ProductPage from './components/ProductPage';
import { useEffect, useState } from 'react';

function App() {

  let [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')) || [])

  function getCart(data) {
    setCart(data)
  }

  function calculateTotal() {
    let cart = JSON.parse(localStorage.getItem('cart'))
    let total = 0
    for(let i = 0; i < cart.length; i++){
        total += cart[i].price * cart[i].quantity
    }
    return total
}

let [total, setTotal] = useState(calculateTotal())

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
    setTotal(calculateTotal())
  }, [cart])

  return (
    <div>
      <BrowserRouter>
        <Nav cart={cart} getCart={getCart} total={total}/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/categories/:category" element={<CategoryPage/>}/>
          <Route path='/product/:id' element={<ProductPage getCart={getCart}/>}/>
        </Routes>
      </BrowserRouter>
      {/* <footer>
        <p>This is not a real store.</p>
        <p>App was made with DummyJSON API</p>
      </footer> */}
    </div>
  );
}

export default App;
