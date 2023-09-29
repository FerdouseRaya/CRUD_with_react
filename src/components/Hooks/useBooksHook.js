import { useState, useEffect } from "react";

const useBooksHook = () => {
  const [bookData, setBookData] = useState([]);

  const createPost = (formData) => {
    console.log("The form data ", formData);
    fetch("http://127.0.0.1:8000/books/create", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => {
        if (!resp.ok) {
          throw new Error("Network response was not ok");
        }
        return resp.json();
      })
      .then((data) => {
        console.log("Successfully created", data);
        setBookData(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  return { bookData, setBookData, createPost };
};

export default useBooksHook;
