import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import { fetchProducts } from "../features/products/productSlice";

import { addToCart } from "../features/cart/cartSlice";

export default function Home() {

  const dispatch = useDispatch();

  const products = useSelector((state) => state.products.items);

  useEffect(() => {

    dispatch(fetchProducts());

  }, [dispatch]);

  return (

    <>

      {products.map((p) => (

        <div key={p.id}>

          <h3>{p.title}</h3>

          <p>₹{p.price}</p>

          <button onClick={() => dispatch(addToCart(p))}>

            Add to Cart

          </button>

        </div>

      ))}

    </>

  );

}