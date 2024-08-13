import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Components/Styles/Login.css';
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({}); // State for error messages
  const navigate = useNavigate();

  // Improved email validation with more specific messages
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) {
      return 'Email address is required.';
    } else if (!emailRegex.test(email)) {
      return 'Invalid email format. Please enter a valid email address (e.g., johndoe@example.com).';
    }
    return null; // Email is valid
  };

  const handleLogin = (e) => {
    e.preventDefault();

    const emailError = validateEmail(email);
    const passwordError = !password.trim() ? 'Password is required.' : null; // Check for empty password

    setErrors({ email: emailError, password: passwordError });

    if (!emailError && !passwordError) {
      // Assuming successful login (replace with actual authentication logic)
      console.log('Login successful!');
      navigate('/dashboard');
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h1>Login</h1>
        <form className="login-form" onSubmit={handleLogin}>
          <div className="form-group">
            <input
              type="email"
              placeholder="Email Address"
              className="form-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            {errors.email && <span className="error-message">{errors.email}</span>}
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="Password"
              className="form-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            {errors.password && <span className="error-message">{errors.password}</span>}
          </div>
          <button type="submit" className="login-button">
            Login
          </button>
          <a href="/forgot-password" className="forgot-password-link">
            Forgot Password?
          </a>
        </form>
      </div>
    </div>
  );
};

export default Login;
