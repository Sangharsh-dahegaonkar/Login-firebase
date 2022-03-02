import React, { useState } from "react";
import Item from "../Item";
import "../style/homePageAddFilesList.css";

const ListItem = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <section>
        <div>
          <div className="addFilesUpload">
            <button className="buttonAddFiles" onClick={() => setShow(!show)}>
              List Element
            </button>
          </div>
          <br />
          {show && <Item />}
        </div>
      </section>
    </>
  );
};

export default ListItem;
