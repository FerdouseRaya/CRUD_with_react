import { useState, useEffect } from "react";

const useBookUpdateHook = () => {
  const [updateBookData, setUpdateBookData] = useState([]);

  const updateBookByID = (formData) => {
    console.log("The form data ", formData);
    fetch("http://127.0.0.1:8000/books/editInfo", {
      method: "PATCH",
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
        console.log("Successfully updated", data);
        setUpdateBookData(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  return { updateBookData, setUpdateBookData, updateBookByID };
};

export default useBookUpdateHook;
