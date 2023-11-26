import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getOne } from "../../services/cocktail/cocktailServices";
import "./details.css";

const CocktailDetails = function () {
  const { id } = useParams();

  const [cocktail, setCocktail] = useState("");

  useEffect(() => {
    getOne(id)
      .then((data) => {
        setCocktail(data);
        console.log(data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <div id="details-wrapper">
      <img id="details-img" src={cocktail.imageUrl} alt="example1" />
      <p id="details-title">{cocktail.cocktailName}</p>
      <p id="details-category">
        Category: <span id="categories">{cocktail.alcoholType}</span>
      </p>
      <div id="info-wrapper">
        <div id="details-description">
          <span>{cocktail.description}</span>
        </div>
      </div>

      <h3>
        Likes: <span id="go">0</span>
      </h3>

      <div id="action-buttons">
        <a href="" id="edit-btn">
          Edit
        </a>
        <a href="" id="delete-btn">
          Delete
        </a>

        <a href="" id="go-btn">
          Likes
        </a>
      </div>
    </div>
  );
};

export default CocktailDetails;
