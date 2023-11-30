import { useNavigate, useParams } from "react-router-dom";

import * as cocktailServices from "../../services/cocktail/cocktailServices";
import { useEffect, useState } from "react";

const CocktailEdit = function () {
  const navigate = useNavigate();
  const { cocktailId } = useParams();
  const [cocktail, setCocktail] = useState({
    title: "",
    category: "",
    maxLevel: "",
    imageUrl: "",
    summary: "",
  });

  useEffect(() => {
    cocktailServices.getOne(cocktailId).then((result) => {
      setCocktail(result);
    });
  }, [cocktailId]);

  const editCocktailSubmitHandler = async (e) => {
    e.preventDefault();

    const values = Object.fromEntries(new FormData(e.currentTarget));

    try {
      await cocktailServices.edit(cocktailId, values);

      navigate("/catalog");
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
    <form id="create" onSubmit={editCocktailSubmitHandler}>
      <div className="container">
        <h1>Create Game</h1>
        <label htmlFor="leg-title">Legendary title:</label>
        <input
          type="text"
          id="title"
          name="title"
          value={cocktail.title}
          onChange={onChange}
          placeholder="Enter game title..."
        />

        <label htmlFor="category">Category:</label>
        <input
          type="text"
          id="category"
          name="category"
          value={cocktail.category}
          onChange={onChange}
          placeholder="Enter game category..."
        />

        <label htmlFor="levels">MaxLevel:</label>
        <input
          type="number"
          id="maxLevel"
          name="maxLevel"
          value={cocktail.maxLevel}
          onChange={onChange}
          min="1"
          placeholder="1"
        />

        <label htmlFor="game-img">Image:</label>
        <input
          type="text"
          id="imageUrl"
          name="imageUrl"
          value={cocktail.imageUrl}
          onChange={onChange}
          placeholder="Upload a photo..."
        />

        <label htmlFor="summary">Summary:</label>
        <textarea
          name="summary"
          value={cocktail.summary}
          onChange={onChange}
          id="summary"
        ></textarea>
        <input className="btn submit" type="submit" value="Edit Game" />
      </div>
    </form>
  );
};
export default CocktailEdit;
