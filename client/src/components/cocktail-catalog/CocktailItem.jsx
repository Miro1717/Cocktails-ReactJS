import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const CocktailsItem = function ({ _id, cocktailName, AlcoholType, imageUrl }) {
  return (
    <Card style={{ width: "18rem" , margin: "15px"}}>
      <Card.Img variant="top" src={imageUrl} />
      <Card.Body>
        <Card.Title>{cocktailName}</Card.Title>
        <Card.Text>{AlcoholType}</Card.Text>
        <Button to={`/cocktails/${_id}`} variant="primary">
          Details
        </Button>
      </Card.Body>
    </Card>
  );
};

export default CocktailsItem;
