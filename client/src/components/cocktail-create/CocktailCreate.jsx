import * as cocktailServices from "../../services/cocktail/cocktailServices";
import { useNavigate } from "react-router-dom";
import "./create.css";

const CocktailCreate = function () {
    const navigate = useNavigate();

    const createCocktailSubmitHandler = async (e) => {
        e.preventDefault();

        const cocktailData = Object.fromEntries(new FormData(e.currentTarget));
        try {
            await cocktailServices.create(cocktailData);

            navigate("/cocktails/catalog");
        } catch (err) {
            // Error notification
            console.log(err);
        }
    };

    return (
        <form
            className="form-login"
            id="login"
            onSubmit={createCocktailSubmitHandler}
        >
            <p className="form-title">Create Cocktail</p>
            <div className="input-container">
                <input
                    type="text"
                    id="cocktailName"
                    placeholder="Cocktail Name"
                    name="cocktailName"
                />
                <span></span>
            </div>
            <div className="input-container">
                <select id="alcoholType" name="alcoholType">
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
                />
            </div>
            <div className="input-container">
                <textarea
                    rows={7}
                    type="text"
                    id="description"
                    name="description"
                    placeholder="Description"
                />
            </div>
            <div className="input-container">
                <textarea
                    rows={7}
                    type="text"
                    id="ingredients"
                    name="ingredients"
                    placeholder="Ingredients"
                />
            </div>
            <button type="submit" className="submit">
                Create
            </button>
        </form>
    );
};

export default CocktailCreate;
