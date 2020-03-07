import React from "react";
// import "../App.css";

export default function Ui() {
  return (
    <div className="App">
      <header className="showcase">
        <div className="container">
          <nav>
            <h1 className="logo">My Sass Website</h1>
          </nav>

          <div className="showcase-content">
            <div>
              <h1>Make Your Marketing Real</h1>
              <p className="my-1">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est
                eligendi tempore atque laborum. Quisquam nemo at non. Corrupti,
                vitae dolore.
              </p>
              <a href="#" className="btn-primary">
                Learn More
              </a>
              <a href="#" className="btn-secondary">
                Sign Up
              </a>
            </div>
            <img src="./assets/chat.png" alt="value" />
          </div>
        </div>
      </header>
    </div>
  );
}
