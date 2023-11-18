import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const MyProfile = function () {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29ja3RhaWx8ZW58MHx8MHx8fDA%3D"
        />
        <Card.Body>
          <Card.Title>Cocktail Name</Card.Title>
          <Card.Text>Rum Cocktail</Card.Text>
          <Button variant="primary" style={{ margin: "10px" }}>
            Edit
          </Button>
          <Button variant="primary" style={{ margin: "10px" }}>
            Delete
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default MyProfile;
