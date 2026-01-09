import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../features/auth/authSlice";

export default function Navbar() {
  const cartCount = useSelector((state) => state.cart.items.length);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className="navbar">
      <h3 onClick={() => navigate("/products")}>MyStore</h3>

      <div>
        <button onClick={() => navigate("/checkout")}>
          Cart ({cartCount})
        </button>

        <button
          onClick={() => {
            dispatch(logout());
            navigate("/");
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
}
