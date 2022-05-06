import React, { useState } from "react";
import { data } from "./Data.js";
import Character from "./Character";
import "./Main.css";
import { TextField } from "@mui/material";
const Main = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [favourites, setFavourites] = useState([]);

  const addFavourites = (id) => {
    if (!favourites.includes(id)) setFavourites(favourites.concat(id));
  };
  return (
    <>
      <div>
        <TextField
          className="search"
          id="filled-basic"
          label="Search by Name"
          variant="filled"
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
        />

        <section className="char-list">
          {data
            .filter((character) => {
              if (searchTerm === "") {
                return character;
              } else if (
                character.name.toLowerCase().includes(searchTerm.toLowerCase())
              ) {
                return character;
              }
            })
            .map((character) => {
              return (
                <Character
                  key={character.id}
                  {...character}
                  handleFavouritesClick={addFavourites}
                />
              );
            })}
        </section>
      </div>
    </>
  );
};

export default Main;
