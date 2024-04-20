import React, { useContext } from 'react'

const SearchName = ({ searchresult }) => {


    return (
        <div style={{ display: "flex", width: "100%", justifyContent: 'center' }}>
            <div style={{ display: "flex", alignItems: "center", flexDirection: 'column' }}>
                <h1 style={{ color: "darkgreen" }}>SEARCH</h1>
                <div>{searchresult?.map((e) => (
                    <>
                        <h1 style={{color:"sienna"}}>{e.productname}</h1>
                        <div style={{ border: "2px solid", margin: "10px" }}>
                            <h2 style={{ display: "flex", alignContent: "center", padding: "10px" }}>Shoe Name : {e.productname}</h2>
                            <h2 style={{ display: "flex", alignContent: "center", padding: "10px" }}>Price : {e.productprice}</h2>
                        </div>
                    </>
                ))}</div>
            </div>
        </div>
    )
}

export default SearchName