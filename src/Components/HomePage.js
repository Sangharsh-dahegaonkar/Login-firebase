import React from "react";
import ListItem from "./ListPopulate/ListItem";
import AddFile from "./AddFiles/AddFile";
import MTable from "./MTable";
import MuiTable from "./MuiTable";
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
      {/* <AddFile />
      <br /> */}

      <ListItem />
      {/* <MTable /> */}
      <MuiTable />
    </>
  );
}

export default HomePage;
