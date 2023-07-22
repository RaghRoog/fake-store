import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.scss'
import Home from "./components/Home";
import Nav from "./components/Nav";
import CategoryPage from "./components/CategoryPage";

function App() {

  let [category, setCategory] = useState('')

  function getCategory(category) {
    setCategory(category)
    console.log(category)
  }

  return (
    <div>
      <BrowserRouter>
        <Nav getCategory={getCategory}/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/categories/:category" element={<CategoryPage categ={category}/>}/>
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
