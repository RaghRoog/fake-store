import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.scss'
import Home from "./components/Home";
import Nav from "./components/Nav";
import CategoryPage from "./components/CategoryPage";
import ProductPage from './components/ProductPage';

function App() {


  return (
    <div>
      <BrowserRouter>
        <Nav/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/categories/:category" element={<CategoryPage/>}/>
          <Route path='/product/:id' element={<ProductPage/>}/>
        </Routes>
      </BrowserRouter>
      <footer>
        <p>This is not a real store.</p>
        <p>App was made with DummyJSON API</p>
      </footer>
    </div>
  );
}

export default App;
