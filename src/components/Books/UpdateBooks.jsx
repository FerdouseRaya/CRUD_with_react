import useBookUpdateHook from '../Hooks/useBookUpdateHook';
import './Books.css'
import React, { useState } from "react";
const UpdateBook = () => {
  const { updateBookByID } = useBookUpdateHook();
  const [bookIDtoUpdate, setBookIDToUpdate] = useState("");
  const [bookTitle, setBookTitle] = useState("");
  const [bookAuthor, setBookAuthor] = useState("");
  const [bookGenre, setBookGenre] = useState("");
  const [bookPrice, setBookPrice] = useState("");
  const [bookStock,setBookStock]=useState("");
  const [bookPageCount, setBookPageCount] = useState("");
  const [language,setLanguage] =useState("");
  const[availability,setAvailability] =useState("");
  const [bestseller,setBestseller] =useState("");
  const handleUpdate = (e) => {
    e.preventDefault();
    console.log("Form Submitted");
    const data = {
      bookID:bookIDtoUpdate,
      title: bookTitle,
      author: bookAuthor,
      genre: bookGenre,
      price: bookPrice,
      stock:bookStock,
      pageCount: bookPageCount,
      language:language,
      availability:availability,
      bestseller:bestseller
    };

    updateBookByID(data);
  };

  return (
    <div >
    <h1>Update Information</h1>

    <form className="form-container" onSubmit={handleUpdate}>
    <p>Enter the ID</p>
      <input
        type="text"
        label="bookID"
        placeholder="input book ID"
        className="custom-input"
        onChange={(e) =>{{
           
          console.log(e.target.value);
          setBookIDToUpdate(e.target.value)
        }}
      }
      />
      <p>Enter title</p>
      <input
        type="text"
        label="title"
        placeholder="input title"
        className="custom-input"
        onChange={(e) =>{{
           
          console.log(e.target.value);
          setBookTitle(e.target.value)
        }}
      }
      />
      <p>Enter Author</p>
      <input
        type="text"
        label="author"
        placeholder="input author name"
        className="custom-input"
        onChange={(e) => {
           
          console.log(e.target.value);
          setBookAuthor(e.target.value)
        }}
      />   
      <p>Enter Genre</p>
      <input
        type="text"
        label="genre"
        placeholder="input genre"
        className="custom-input"
        onChange={(e) => setBookGenre(e.target.value)}
      />
      <p>Enter Price</p>
      <input
        type="text"
        label="Price"
        placeholder="input price"
        className="custom-input"
        onChange={(e) => setBookPrice(e.target.value)}
      />
      <p>Enter Stock</p>
      <input
        type="text"
        label="stock"
        placeholder="input Stock"
        className="custom-input"
        onChange={(e) => setBookStock(e.target.value)}
      />
      <p>Enter language</p>
      <input
        type="text"
        label="language"
        placeholder="input language"
        className="custom-input"
        onChange={(e) => setLanguage(e.target.value)}
      />
      <p>Enter PageCount</p>
      <input
        type="text"
        label="pageCount"
        placeholder="input Count"
        className="custom-input"
        onChange={(e) => setBookPageCount(e.target.value)}
      />
      <p>Enter Availability</p>
      <input
        type="text"
        label="availability"
        placeholder="input availability"
        className="custom-input"
        onChange={(e) => setAvailability(e.target.value)}
      />
      <p>Enter bestseller</p>
      <input
        type="text"
        label="bestseller"
        placeholder="input bestseller"
        className="custom-input"
        onChange={(e) => setBestseller(e.target.value)}
      />
      <button type="submit" className="custom-btn custom-btn-success">Submit</button>
    </form>
  </div>
  );
};

export default UpdateBook;
