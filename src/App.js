import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Product from './Products/Product';
import SearchName from './Products/SearchName';
import { useState } from 'react';


function App() {
const nav = useNavigate()
  const [search, setsearch] = useState(" ")
  const [searchresult, setsearchresult] = useState([{}])
  const searchpro = async (e) => {
    try {

      const res = await axios.get(`https://localhost:7244/Search by Product Name = ${search}`)
      const result = await res.data
      setsearchresult(result)
      console.log(result)
      nav('/SearchByName')
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <div>
      <Routes>
        <Route path='/' element={<Product searchpro={searchpro} setsearch={setsearch}/>} />
        <Route path='/SearchByName' element={<SearchName searchresult={searchresult}/>} />
      </Routes>
    </div>

  );
}

export default App;
