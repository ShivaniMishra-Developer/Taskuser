import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Components/Styles/Signup.css';
import { FaCheckCircle } from 'react-icons/fa';

const Signup = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [showForm, setShowForm] = useState(true);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

    const isValid = validateForm();
    if (!isValid) return;

    try {
      const response = await fetch('http://127.0.0.1:8000/api/register/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          first_name: firstName,
          last_name: lastName,
          email: email,
          password: password,
          confirm_password: confirmPassword,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        setErrors(errorData);
      } else {
        setShowForm(false);
        setShowModal(true);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const validateForm = () => {
    let formErrors = {};
    let isValid = true;

    if (!firstName.trim()) {
      formErrors.first_name = 'This field is required.';
      isValid = false;
    }

    if (!lastName.trim()) {
      formErrors.last_name = 'This field is required.';
      isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim() || !emailRegex.test(email)) {
      formErrors.email = 'This field is required.';
      isValid = false;
    }

    if (!password.trim()) {
      formErrors.password = 'This field is required.';
      isValid = false;
    }

    if (!confirmPassword.trim() || password !== confirmPassword) {
      formErrors.confirm_password = password !== confirmPassword ? 'Passwords do not match.' : 'This field is required.';
      isValid = false;
    }

    setErrors(formErrors);
    return isValid;
  };

  const closeModal = () => {
    setShowModal(false);
    navigate('/dashboard');
  };

  return (
    <div className="signup-container">
      {showForm && (
        <div className="signup-card">
          <h1>Sign Up</h1>
          <form className="signup-form" onSubmit={handleSignup}>
            <div className="form-group">
              <input
                type="text"
                placeholder="First Name"
                className="form-input"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              {errors.first_name && <span className="error-message">{errors.first_name}</span>}
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder="Last Name"
                className="form-input"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
              {errors.last_name && <span className="error-message">{errors.last_name}</span>}
            </div>
            <div className="form-group">
              <input
                type="email"
                placeholder="Email Address"
                className="form-input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
              />
              {errors.password && <span className="error-message">{errors.password}</span>}
            </div>
            <div className="form-group">
              <input
                type="password"
                placeholder="Confirm Password"
                className="form-input"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              {errors.confirm_password && <span className="error-message">{errors.confirm_password}</span>}
            </div>
            <button type="submit" className="signup-button">Sign Up</button>
          </form>
        </div>
      )}

      {showModal && (
        <div className="modal-overlay">
          <div className="modal-card">
            <FaCheckCircle className="modal-icon" />
            <h2>Signup Successful</h2>
            <button onClick={closeModal} className="modal-button">Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Signup;
