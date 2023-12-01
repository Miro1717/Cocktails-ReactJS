import * as cocktailServices from "../../services/cocktail/cocktailServices";
import CocktailsItem from "../cocktail-catalog/CocktailItem";
import { useState, useEffect } from "react";

const Home = function () {
  const [cocktails, setCocktails] = useState([]);

  useEffect(() => {
    cocktailServices.getLastCocktails().then((result) => {
      if (result.length > 3) {
        result = result.splice(0, 3);
      }
      setCocktails(result);
    });
  }, []);
  return (
    <>
      <h1 style={{ color: "white", textAlign: "center" }}>Last 3 Cocktails</h1>

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
    </>
  );
};

export default Home;
