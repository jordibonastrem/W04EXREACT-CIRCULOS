import logo from "./logo.svg";
import "./App.css";
import Circle from "./components/Circle.jsx";

function App() {
  const numbers = [1, 2, 3];

  return (
    <>
      {numbers.map((number) => (
        <Circle key={number}></Circle>
      ))}
    </>
  );
}

export default App;
