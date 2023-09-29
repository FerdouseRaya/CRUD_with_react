import React, { useState } from "react";
import useDeleteBookHook from "../Hooks/useDeleteBookHook";

const DeleteBook = () => {
    const{deleteBookByID} = useDeleteBookHook();
  const [bookIDToDelete, setBookIDToDelete] = useState("");

  const handleDelete = (e) => {
    e.preventDefault();
    const id={
        bookID:bookIDToDelete
    }
    deleteBookByID(id);

  };

  return (
    <div>
      <h1>Delete Book by ID</h1>
      <form className="form-container" >
        <p>Enter the Book ID</p>
      <input
        type="text"
        label="bookID"
        placeholder="input ID"
        className="custom-input"
        onChange={(e) => {
          console.log(e.target.value);
          setBookIDToDelete(e.target.value)}}
      />
      <button className="custom-btn custom-btn-success"onClick={handleDelete}>Delete</button>
      </form>
    </div>
  );
};

export default DeleteBook;
