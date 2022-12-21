import "./App.css";
import { useState } from "react";

function App() {
  const [activeClass, setActiveClass] = useState("hidden");

  const toggleClass = () => {
    setActiveClass(activeClass === "hidden" ? "show" : "hidden");
  };

  return (
    <article>
      <div>
        <p>Why is React great?</p>
        <button onClick={toggleClass}>
          {activeClass === "hidden" ? "+" : "-"}
        </button>
      </div>
      <div className={activeClass}>Fast Learning Curve</div>
    </article>
  );
}

export default App;
