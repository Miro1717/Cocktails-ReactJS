import * as cocktailServices from "../../services/cocktail/cocktailServices";
import CocktailsItem from "./CocktailItem";
import { useState, useEffect } from "react";
import { Oval } from "react-loader-spinner";

import "./cocktailItem.css";

const CocktailCatalog = function () {
  const [cocktails, setCocktails] = useState([]);
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    try {
      setLoading(true)
      cocktailServices.getAll().then((result) => setCocktails(result));
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false)
    }
  }, []);

  return (
    <>
      <h1 style={{ color: "white", textAlign: "center" }}>Catalog</h1>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          margin: "10px",
        }}
      >

      {loading 
      ? (
        <Oval
        height={80}
        width={80}
        color="#4fa94d"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel='oval-loading'
        secondaryColor="#4fa94d"
        strokeWidth={2}
        strokeWidthSecondary={2}
      
      />)
    : (

      cocktails.map((cocktail) => (
        <CocktailsItem key={cocktail._id} {...cocktail} />
      ))
    )}



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

export default CocktailCatalog;
