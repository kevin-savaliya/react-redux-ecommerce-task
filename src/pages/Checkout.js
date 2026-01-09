import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, clearCart } from "../features/cart/cartSlice";

export default function Checkout() {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const total = cartItems.reduce(
    (sum, item) => sum + item.price,
    0
  );

  return (
    <div className="container">
      <h2>Checkout</h2>

      {cartItems.length === 0 && <p>Your cart is empty</p>}

      {cartItems.map((item) => (
        <div key={item.id} className="checkout-item">
          <span>{item.title}</span>
          <span>₹ {item.price}</span>
          <button
            onClick={() => dispatch(removeFromCart(item.id))}
          >
            Remove
          </button>
        </div>
      ))}

      {cartItems.length > 0 && (
        <>
          <h3>Total: ₹ {total}</h3>
          <button onClick={() => dispatch(clearCart())}>
            Place Order
          </button>
        </>
      )}
    </div>
  );
}
