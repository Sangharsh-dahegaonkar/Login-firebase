import React from "react";
import ListItem from "./ListPopulate/ListItem";
import AddFile from "./AddFiles/AddFile";
import MTable from "./AddFiles/MTable";
import MuiTable from "./AddFiles/MuiTable";

import "./style/homePage.css";

function HomePage({ handleLogout }) {
  return (
    <>
      <header>
        <div className="headerContainer">
          <div className="logoutButtonPosition">
            <button className="logoutButton" onClick={handleLogout}>
              Logout
            </button>
          </div>
        </div>
      </header>
      <br />
      <div className="headingCenter">
        <h2>Welcome to the home page</h2>
      </div>
      {/* <AddFile />
      <br /> */}

      <ListItem />
      <br />

      {/* <MTable /> */}
      {/* <MuiTable /> */}
    </>
  );
}

export default HomePage;
