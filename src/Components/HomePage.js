import React from "react";
import ListItem from "./ListPopulate/ListItem";
import AddFile from "./AddFiles/AddFile";
import "./style/homePage.css";

function HomePage({ handleLogout }) {
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
      <br />
      <div className="headingCenter">
        <h2>Welcome to the home page</h2>
      </div>
      <AddFile />
      <br />

      <ListItem />
    </>
  );
}

export default HomePage;
