import { useState } from "react";
import "./components/fetchAPi/fetchDemo";
import FetchDemo from "./components/fetchAPi/fetchDemo";
import Shop from "./components/Shop/Shop";
import AddBooks from "./components/Books/AddBooks";
import './App.css'
import DeleteBook from "./components/Books/DeleteBooks";
import UpdateBook from "./components/Books/UpdateBooks";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <FetchDemo/> */}
      <div className="my-container">
        <Shop />
      </div>

      <div className="my-container">
        <AddBooks />
      </div>
      <div className="my-container">
        <DeleteBook/>
      </div>
      <div className="my-container">
        <UpdateBook/>
      </div>
    </>
  );
}

export default App;
