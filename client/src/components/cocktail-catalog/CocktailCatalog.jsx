import * as cocktailServices from "../../services/cocktail/cocktailServices";
import CocktailsItem from "./CocktailItem";
import { useState, useEffect } from "react";

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

      {cocktails.length === 0 && <h3>No articles yet</h3>}
    </div>
  );
};

export default CocktailCatalog;
