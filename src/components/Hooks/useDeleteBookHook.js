const useDeleteBookHook = () => {
  const deleteBookByID = (id) => {
    fetch(`http://127.0.0.1:8000/books/deleteBooks`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(id),
    })
      .then((resp) => {
        if (!resp.ok) {
          throw new Error("Network response was not ok");
        }
        return resp.json();
      })
      .then((data) => {
        console.log("Successfully deleted", data);
      })
      .catch((error) => {
        console.error("Error deleting book:", error);
      });
  };

  return { deleteBookByID };
};

export default useDeleteBookHook;
