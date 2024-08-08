import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Components/Styles/ForgotPassword.css';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleResetPassword = (e) => {
    e.preventDefault();
    alert('Password reset link sent to your email');
    navigate('/login');
  };

  return (
    <div className="forgot-password-container">
      <div className="forgot-password-card">
        <h1>Forgot Password</h1>
        <form className="forgot-password-form" onSubmit={handleResetPassword}>
          <input
            type="email"
            placeholder="Email Address"
            className="form-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit" className="reset-password-button">Reset Password</button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
