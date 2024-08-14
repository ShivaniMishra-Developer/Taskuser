import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Components/Styles/Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [loginError, setLoginError] = useState(''); // For API-related errors
  const navigate = useNavigate();

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) {
      return 'Email address is required.';
    } else if (!emailRegex.test(email)) {
      return 'Invalid email format. Please enter a valid email address (e.g., johndoe@example.com).';
    }
    return null;
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    const emailError = validateEmail(email);
    const passwordError = !password.trim() ? 'Password is required.' : null;

    setErrors({ email: emailError, password: passwordError });

    if (!emailError && !passwordError) {
      try {
        const response = await fetch('http://localhost:8000/api/token/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, password }),
        });

        const data = await response.json();

        if (response.ok) {
          // Assuming the token is returned in the "token" field
          localStorage.setItem('userToken', data.token);
          console.log('Login successful!');
          navigate('/dashboard');
        } else {
          // Handle errors like incorrect credentials
          setLoginError('Invalid email or password. Please try again.');
        }
      } catch (error) {
        setLoginError('Something went wrong. Please try again later.');
        console.error('Login failed:', error);
      }
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
          {loginError && <span className="error-message">{loginError}</span>}
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
