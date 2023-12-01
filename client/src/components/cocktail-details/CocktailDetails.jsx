import { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getOne, remove } from "../../services/cocktail/cocktailServices";
import AuthContext from "../../context/authContext";
import "./details.css";

const CocktailDetails = function () {
  const navigate = useNavigate();
  const { id } = useParams();
  const { userId, isAuthenticated } = useContext(AuthContext);

  const [cocktail, setCocktail] = useState({});

  useEffect(() => {
    getOne(id)
      .then((data) => setCocktail(data))
      .catch((err) => console.log(err));
  }, [id]);

  const deleteButtonClickHandler = async () => {
    const hasConfirmed = confirm(
      `Are you sure you want to delete ${cocktail.cocktailName}`
    );

    if (hasConfirmed) {
      await remove(id);

      navigate("/cocktails/catalog");
    }
  };

  const isOwner = userId === cocktail._ownerId;

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

      {isOwner && (
        <div id="action-buttons">
          <a href={`/cocktails/edit/${id}`} id="edit-btn">
            Edit
          </a>
          <a id="delete-btn" onClick={deleteButtonClickHandler}>
            Delete
          </a>
        </div>
      )}

      {isAuthenticated && !isOwner && (
        <div id="action-buttons">
          <a href="" id="go-btn">
            Likes
          </a>
        </div>
      )}
    </div>
  );
};

export default CocktailDetails;
