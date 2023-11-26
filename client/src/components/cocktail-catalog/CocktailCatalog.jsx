import * as cocktailServices from "../../services/cocktail/cocktailServices";
import CocktailsItem from "./CocktailItem";
import { useState, useEffect } from "react";
import "./cocktailItem.css";

const CocktailCatalog = function () {
  const [cocktails, setCocktails] = useState([]);

  useEffect(() => {
    cocktailServices.getAll().then((result) => setCocktails(result));
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        margin: "10px",
      }}
    >
      {cocktails.map((cocktail) => (
        <CocktailsItem key={cocktail._id} {...cocktail} />
      ))}

      {cocktails.length === 0 && (
        <h3
          style={{
            color: "white",
            position: "absolute",
            top: "80px",
            right: "50%",
          }}
        >
          No cocktails to views
        </h3>
      )}
    </div>
  );
};

export default CocktailCatalog;
