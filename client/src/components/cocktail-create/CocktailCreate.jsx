import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const CocktailCreate = function () {
  return (
    <div
      style={{
        position: "absolute",
        top: "300px",
        left: "50%",
        transform: "translate(-50%, -50%)",
        padding: "10px",
      }}
    >
      <FloatingLabel
        controlId="floatingInput"
        label="Cocktail Name"
        style={{ marginTop: "10px" }}
      >
        <Form.Control type="text" placeholder="John" />
      </FloatingLabel>

      <Form.Select
        aria-label="Default select example"
        style={{ marginTop: "10px" }}
      >
        <option>Gin Cocktail</option>
        <option value="1">Rum Cocktail</option>
        <option value="2">Vodka Cocktail</option>
        <option value="3">Whisky Cocktail</option>
        <option value="4">Tequila Cocktail</option>
        <option value="5">Non-Alcohol Cocktail</option>
      </Form.Select>

      <FloatingLabel
        controlId="floatingInput"
        label="Image URL"
        style={{ marginTop: "10px" }}
      >
        <Form.Control type="text" placeholder="" />
      </FloatingLabel>

      <FloatingLabel
        className="mb-3"
        controlId="exampleForm.ControlTextarea1"
        label=""
        style={{ marginTop: "10px" }}
      >
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Control as="textarea" rows={5} placeholder="Description" />
        </Form.Group>
      </FloatingLabel>

      <Button variant="secondary" style={{ margin: "10px 140px" }}>
        Create
      </Button>
    </div>
  );
};

export default CocktailCreate;
