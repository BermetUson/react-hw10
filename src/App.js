import "./App.css";
import Header from "./components/Header";
import { MyContext } from "./context/myContext";
import { useState } from "react";

function App() {
  const [next, setNext] = useState(true);

  function handlerChange() {
    setNext(!next);
  }
  return (
    <MyContext.Provider value={{ theme: next, handlerChange }}>
      <Header />
    </MyContext.Provider>
  );
}

export default App;
