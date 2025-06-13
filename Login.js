import React, { useState } from "react";
const credentials = [
  { username: "admin", password: "admin123" },
  { username: "user", password: "user123" }
]
function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    const match = credentials.find(
      (cred) => cred.username === username && cred.password === password
    );

    if (match) {
      setIsLoggedIn(true);
      setError("");
    } else {
      setError("Invalid credentials!");
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername("");
    setPassword("");
    setError("");
  };

  return (
    <div style={{ maxWidth: "400px", margin: "auto", padding: "20px" }}>
      {isLoggedIn ? (
        <div>
          <h2>Welcome, {username}!</h2>
          <button onClick={handleLogout}>
            Logout
          </button>
        </div>
      ) : (
        <form onSubmit={handleLogin}>
          <h2>Login</h2>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          /><br /><br />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          /><br /><br />
          <button type="submit">
            Login
          </button>
          {error && <p style={{ color: "red" }}>{error}</p>}
        </form>
      )}

    </div>
  )
}

export default Login;