import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getOne } from "../../services/cocktail/cocktailServices";
import "./details.module.css";

const CocktailDetails = function () {
  const { id } = useParams();

  const [cocktail, setCocktail] = useState("");

  useEffect(() => {
    getOne(id)
      .then((data) => {
        setCocktail(data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <div
      className="info"
      style={{ color: "white", letterSpacing: " 1px", display: "inline-block" }}
    >
      <img src={cocktail.imageUrl} img />
      <h3>Type: {cocktail.AlcoholType}</h3>
      <h3>Name: {cocktail.cocktailName}</h3>
      <h3>Description: {cocktail.description}</h3>
    </div>
  );
};

export default CocktailDetails;
