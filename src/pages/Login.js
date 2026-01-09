import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../features/auth/authSlice";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { token, loading, error } = useSelector((state) => state.auth);

  const [form, setForm] = useState({
    username: "kminchelle",
    password: "0lelplR",
  });

  useEffect(() => {
    if (token) navigate("/products");
  }, [token, navigate]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(loginUser(form));
  };

  return (
    <div className="login-wrapper">
      <form className="login-card" onSubmit={submitHandler}>
        <h2>Login</h2>

        <input
          value={form.username}
          onChange={(e) =>
            setForm({ ...form, username: e.target.value })
          }
          placeholder="Username"
        />

        <input
          type="password"
          value={form.password}
          onChange={(e) =>
            setForm({ ...form, password: e.target.value })
          }
          placeholder="Password"
        />

        <button disabled={loading}>
          {loading ? "Signing in..." : "Login"}
        </button>

        {error && <p className="error">{error}</p>}
      </form>
    </div>
  );
}
