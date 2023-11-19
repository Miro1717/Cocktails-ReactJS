import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';



const Header = function () {
  return (
    <>
   <Navbar bg="dark" data-bs-theme="dark" >
        <Container>
          <Navbar.Brand as={Link} to="/">Home</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/cocktails/catalog">Catalog</Nav.Link>
            <Nav.Link as={Link} to="/cocktails/create">Create Cocktails</Nav.Link>
            <Nav.Link as={Link} to="/users/profile">Profile</Nav.Link>
            <Nav.Link as={Link} to="/users/logout">Logout</Nav.Link>
            <Nav.Link as={Link} to="/users/register">Register</Nav.Link>
            <Nav.Link as={Link} to="/users/login">Login</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    
      {/* <nav>
       <ul className="menu">
         <li>
           <Link to="/">Home</Link>
         </li>
         <li>
           <Link to="/cocktails/catalog">Catalog</Link>
         </li>
         <li>
           <Link to="/cocktails/create">Create Cocktails</Link>
         </li>
         <li>
           <Link to="/users/profile">Profile</Link>
         </li>
         <li>
           <Link to="/users/logout">Logout</Link>
         </li>
         <li>
           <Link to="/users/register">Register</Link>
         </li>
         <li>
           <Link to="/users/login">Login</Link>
         </li>
       </ul>
     </nav>  */}
     </>
  );
};

export default Header;
