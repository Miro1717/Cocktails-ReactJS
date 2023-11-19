import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import * as cocktailServices from "../../services/cocktail/cocktailServices";
import { useNavigate } from "react-router-dom";

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
      style={{
        position: "absolute",
        top: "300px",
        left: "50%",
        transform: "translate(-50%, -50%)",
        padding: "10px",
      }}
      onSubmit={createCocktailSubmitHandler}
    >
      <FloatingLabel
        controlId="floatingInputCocktailName"
        label="Cocktail Name"
        style={{ marginTop: "10px" }}
      >
        <Form.Control type="text" placeholder="John" name="cocktailName" />
      </FloatingLabel>

      <Form.Select
        aria-label="Default select example"
        style={{ marginTop: "10px" }}
        name="AlcoholType"
      >
        <option>Gin Cocktail</option>
        <option>Rum Cocktail</option>
        <option>Vodka Cocktail</option>
        <option>Whisky Cocktail</option>
        <option>Tequila Cocktail</option>
        <option>Non-Alcohol Cocktail</option>
      </Form.Select>

      <FloatingLabel
        controlId="floatingInputImageUrl"
        label="Image URL"
        style={{ marginTop: "10px" }}
      >
        <Form.Control type="text" placeholder="" name="imageUrl" />
      </FloatingLabel>

      <FloatingLabel
        className="mb-3"
        controlId="exampleForm.ControlTextarea1"
        label=""
        style={{ marginTop: "10px" }}
      >
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Control
            as="textarea"
            rows={5}
            placeholder="Description"
            name="description"
          />
        </Form.Group>
      </FloatingLabel>

      <Button
        variant="secondary"
        type="submit"
        style={{ margin: "10px 140px" }}
      >
        Create
      </Button>
    </form>
  );
};

export default CocktailCreate;
