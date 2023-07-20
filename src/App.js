import { useEffect } from "react";
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
      <Home/>
    </div>
  );
}

export default App;
