import { Nav, Container, Button, Navbar as NavbarBs } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { HiShoppingCart } from "react-icons/hi";
import { useShoppingCart } from "../context/shoppingCartContext";

export const Navbar = () => {
  const { openCart, cartQuantity } = useShoppingCart();

  return (
    <NavbarBs sticky="top" className="bg-white snadow-lg mb-3">
      <Container>
        <Nav className="me-auto">
          <Nav.Link as={NavLink} to="/">
            Home
          </Nav.Link>

          <Nav.Link as={NavLink} to="/store">
            Store
          </Nav.Link>

          <Nav.Link as={NavLink} to="/about">
            About
          </Nav.Link>
        </Nav>
        {cartQuantity === 0 || (
          <Button
            onClick={openCart}
            variant="outline-primary"
            className="rounded-circle"
            style={{
              position: "relative",
              width: "3rem",
              height: "3rem",
            }}
          >
            <HiShoppingCart
              style={{
                height: "2rem",
              }}
            />
            <div
              className="rounded-circle bg-danger d-flex justify-content-center align-items-center"
              style={{
                color: "white",
                width: "1.5rem",
                height: "1.5rem",
                position: "absolute",
                bottom: 0,
                right: 0,
                translate: "25% 25%",
              }}
            >
              {cartQuantity}
            </div>
          </Button>
        )}
      </Container>
    </NavbarBs>
  );
};
