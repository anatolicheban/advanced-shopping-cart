import { Offcanvas, Stack } from "react-bootstrap";
import { useShoppingCart } from "../context/shoppingCartContext";
import CartItem from "./CartItem";
import storeItems from "../data/items.json";
import { formatCurrency } from "../utilities/formatCurrency";

type ShoppincCartProps = {
  isOpen: boolean;
};

const ShoppingCart = ({ isOpen }: ShoppincCartProps) => {
  const { closeCart, cartItems } = useShoppingCart();

  const totalPrice = (() => {
    let total = 0;

    cartItems.map((item) => {
      const product = storeItems.find((i) => i.id === item.id);
      total += (product?.price || 0) * item.quantity;
    });
    return total;
  })();

  return (
    <Offcanvas show={isOpen} placement="end" onHide={closeCart}>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Stack gap={3}>
          {cartItems.map((item) => {
            return <CartItem key={item.id} {...item} />;
          })}
          <div className="ms-auto fw-bold fs 5">Total {formatCurrency(totalPrice)}</div>
        </Stack>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default ShoppingCart;
