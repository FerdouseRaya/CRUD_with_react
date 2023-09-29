import React, { useState, useEffect } from 'react';

const FetchDemo = () => {
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/books/viewBySearch")
      .then((resp) => resp.json())
      .then((data) => {
        console.log("Data: ",data)
        setProductData(data); // Set the fetched data to the state
      });
  }, []);


  return (
    <>
      <div>
        <h1>FetchApi</h1>
        {productData.map((product) => (
          <div key={product.id}>
            <h5>Title: {product.title}</h5>
          </div>
        ))}
      </div>
    </>
  );
};

export default FetchDemo;
