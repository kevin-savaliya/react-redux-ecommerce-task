import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../features/products/productSlice";
import { addToCart } from "../features/cart/cartSlice";

export default function Products() {
  const dispatch = useDispatch();
  const { items, loading } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div className="container">
      <h2>Products</h2>

      {loading && <p>Loading...</p>}

      <div className="grid">
        {items.map((product) => (
          <div key={product.id} className="card">
            <img src={product.thumbnail} alt={product.title} />
            <h4>{product.title}</h4>
            <p>₹ {product.price}</p>

            <button
              onClick={() => dispatch(addToCart(product))}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
