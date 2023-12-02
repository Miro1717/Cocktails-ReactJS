import { Link } from "react-router-dom";

const CocktailsItem = function ({ _id, cocktailName, alcoholType, imageUrl }) {
  return (
    <div className="card">
      <img className="image" style={{ margin: "5px" }} src={imageUrl} />
      <div className="content">
        <a href="#">
          <span className="title">{cocktailName}</span>
        </a>

        <p className="desc">{alcoholType}</p>

        <Link className="action" to={`/cocktails/${_id}`}>
          Details
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    </div>
  );
};

export default CocktailsItem;
