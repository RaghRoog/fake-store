import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "./components/Home";

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
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
