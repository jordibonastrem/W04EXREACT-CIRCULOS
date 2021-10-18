import { useState } from "react";
import "../components/circle.css";

function Circle() {
  const [circle, setCircle] = useState(false);

  return (
    <div
      className={circle ? "yellow" : "circle"}
      onClick={() => setCircle(!circle)}
    ></div>
  );
}

export default Circle;
