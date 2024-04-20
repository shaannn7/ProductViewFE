import axios from 'axios'
import React, {  useContext, useEffect, useState } from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useNavigate } from 'react-router-dom';
import SearchName from './SearchName';




const Product = ({searchpro,setsearch}) => {

    const [product, setproduct] = useState([{}])
    const getproduct = async () => {
        try {
            let res = await axios.get("https://localhost:7244/Get All Products")
            setproduct(res.data)
            console.log(res.data)
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getproduct()
    }, [])

    const nav = useNavigate()

    

    return (
            <div style={{ display: "flex", width: "100%", justifyContent: 'center' }}>
                <div style={{ display: "flex", alignItems: "center", flexDirection: 'column' }}>
                    <h1 style={{ color: "darkgreen" }}>SHOE PLANET</h1>
                    <form onSubmit={(e) => {
                        searchpro()
                        e.preventDefault()
                    }}>
                        <input
                            type="text"
                            placeholder="Search..."
                            onChange={(e) => setsearch(e.target.value)}
                        />
                        <button type="submit">Search</button>
                    </form>
                    <div>{product.map((e) => (
                        <div style={{ border: "2px solid", margin: "10px" }}>
                            <h2 style={{ display: "flex", alignContent: "center", padding: "10px" }}>Shoe Name : {e.productname}</h2>
                            <h2 style={{ display: "flex", alignContent: "center", padding: "10px" }}>Price : {e.productprice}</h2>
                        </div>
                    ))}</div>
                </div>
            </div>

    )
}

export default Product