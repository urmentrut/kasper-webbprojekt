import { useState } from "react";
import { loginUser } from "../api";

export default function LoginForm({ setAuthenticated, setUsername }) {
  const [username, setInputUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    const res = await loginUser(username, password);
    console.log("Login response:", res.data);

    if (res.data.success) {
      setUsername(username);
      setAuthenticated(true);
      localStorage.setItem("username", username);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={username}
        onChange={(e) => setInputUsername(e.target.value)}
        placeholder="Username"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}
