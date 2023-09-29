import React, { useEffect, useState } from 'react';
import Books from '../Books/Books';
import "./Shop.css";


const Shop = () => {
  const [books, setBookData] = useState([]);
//   const [loading, setLoading] = useState(false);

  useEffect(() => {
    // setLoading(true);
    fetch("http://127.0.0.1:8000/books/viewBySearch?page=1&limit=11")
      .then((resp) => resp.json())
      .then((data) => {
        console.log("Data: ",data.result.result)
        setBookData(data.result.result); 
        // setLoading(false);
      });
    //   .finally(() => {
    //     setLoading(false);
    //   });
  }, []);


  return (
    <div className="">
      <div className="product-area">
        <h1>All Books</h1>
        {/* {loading === true && <h1>Loading...</h1>} */}
        {books.map((book) => (
            <Books
            key={book.id}
            id={book.id}
            title={book.title}
            ISBN={book.ISBN}
            author={book.author}
            genre={book.genre}
            stock={book.stock}
            pageCount = {book.pageCount}
            price={book.price}
          />
        ))}
      </div>
    </div>
  );
};

export default Shop;