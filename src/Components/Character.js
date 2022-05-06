import React from "react";
import "./Character.css";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { IconButton } from "@mui/material";
const Character = ({
  mass,
  name,
  birth_year,
  height,
  handleFavouritesClick,
  id,
}) => {
  return (
    <div className="card" key={id}>
      <h3>{name}</h3>
      <p>Height:{height}</p>
      <p>Birth:{birth_year}</p>
      <p>Mass: {mass}</p>

      <IconButton
        className="add"
        sx={{ "&:hover": { color: "yellow" } }}
        onClick={() => handleFavouritesClick(id)}
      >
        <StarBorderIcon color="primary" />
      </IconButton>
    </div>
  );
};
export default Character;
