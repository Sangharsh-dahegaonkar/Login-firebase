import React from "react";
import "./style/hero.css";

function Hero({ handleLogout }) {
  return (
    <>
      <header>
        <div className="tryPos">
          <div className="posRelative">
            <button className="buttonPos" onClick={handleLogout}>
              Logout
            </button>
          </div>
        </div>
      </header>
      <div className="back1">
        <h2>Welcome to the home page</h2>
      </div>
    </>
  );
}

export default Hero;
