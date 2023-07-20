import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.scss'
import Home from "./components/Home";
import Nav from "./components/Nav";

function App() {

  useEffect(()=>{
    // fetch('https://dummyjson.com/products/categories')
    // .then(res => res.json())
    // // .then(res => res.products.forEach(element => {
    // //   console.log(element.category)
    // // }))
    // .then(console.log)
  }, [])

  return (
    <div>
      <Nav/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
        </Routes>
      </BrowserRouter>
      <footer>
        <p>This is not real store.</p>
        <p>App was made with DummyJSON API</p>
      </footer>
    </div>
  );
}

export default App;
