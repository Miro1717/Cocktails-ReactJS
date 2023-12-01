import { useNavigate, useParams } from "react-router-dom";

import * as cocktailServices from "../../services/cocktail/cocktailServices";
import { useEffect, useState } from "react";

const CocktailEdit = function () {
  const navigate = useNavigate();
  const { id } = useParams();
  const [cocktail, setCocktail] = useState({
    cocktailName: "",
    alcoholType: "",
    description: "",
    imageUrl: "",
  });

  useEffect(() => {
    cocktailServices.getOne(id).then((result) => {
      setCocktail(result);
    });
  }, [id]);

  const editCocktailSubmitHandler = async (e) => {
    e.preventDefault();

    const values = Object.fromEntries(new FormData(e.currentTarget));

    try {
      await cocktailServices.edit(id, values);

      navigate(`/cocktails/${id}`);
    } catch (err) {
      // Error notification
      console.log(err);
    }
  };

  const onChange = (e) => {
    setCocktail((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <form
      className="form-login"
      id="login"
      onSubmit={editCocktailSubmitHandler}
    >
      <p className="form-title">Edit</p>
      <div className="input-container">
        <input
          type="text"
          id="cocktailName"
          placeholder="Cocktail Name"
          name="cocktailName"
          value={cocktail.cocktailName}
          onChange={onChange}
        />
        <span></span>
      </div>
      <div className="input-container">
        <select
          id="alcoholType"
          name="alcoholType"
          value={cocktail.alcoholType}
          onChange={onChange}
        >
          <option>Gin Cocktail</option>
          <option>Rum Cocktail</option>
          <option>Vodka Cocktail</option>
          <option>Whisky Cocktail</option>
          <option>Tequila Cocktail</option>
          <option>Non-Alcohol Cocktail</option>
        </select>
      </div>
      <div className="input-container">
        <input
          type="imageUrl"
          id="imageUrl"
          name="imageUrl"
          placeholder="Image Url"
          value={cocktail.imageUrl}
          onChange={onChange}
        />
      </div>
      <div className="input-container">
        <textarea
          rows={7}
          type="text"
          id="description"
          name="description"
          placeholder="Description"
          value={cocktail.description}
          onChange={onChange}
        />
      </div>
      <button type="submit" className="submit">
        Edit
      </button>
    </form>
  );
};
export default CocktailEdit;
