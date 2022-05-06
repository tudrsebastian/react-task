import React from "react";
import "./Header.css";

import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
const Header = () => {
  return (
    <div className="header-container">
      <h1 className="title">Swapi Box</h1>

      <ul className="btns">
        <li>
          <Button color="secondary">People</Button>
        </li>
        <li>
          <Button color="secondary">Planets</Button>
        </li>
        <li>
          <Button color="secondary">Vehichles</Button>
        </li>
        <li>
          <Button className="favorites">View favorites</Button>
        </li>
      </ul>
    </div>
  );
};

export default Header;
