import React from "react";
import Review from "./Review";
import "./App.css";

function App() {
  return (
    <div className="App">
      <section className="container">
        <div className="title">
          <h2>
            Our Characters
            <div className="underline"></div>
          </h2>
        </div>
        <Review />
      </section>
    </div>
  );
}

export default App;
