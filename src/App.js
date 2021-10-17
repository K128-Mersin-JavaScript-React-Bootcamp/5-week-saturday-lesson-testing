import logo from "./logo.svg";
import "./App.css";
import Button from "./components/button/Button";
import TextInput from "./components/textInput/TextInput";
import List from "./components/list/List";
import { useState } from "react";
import idGenerator from "./utils/idGenerator";

function App() {
  const [text, setText] = useState("");
  const [items, setItems] = useState([]);
  const handleClick = () => {
    setItems([...items, { id: idGenerator(), name: text }]);
  };
  const handleText = (event) => {
    setText(event.target.value);
  };
  return (
    <div>
      <TextInput id="my-input" placeholder="Enter item" onChange={handleText} />
      <Button onClick={handleClick}>Add item</Button> <br />
      <List items={items} />
    </div>
  );
}

export default App;
