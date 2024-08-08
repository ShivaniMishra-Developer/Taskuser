import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Components/Styles/Signup.css'; // Ensure this path matches your file structure
import { FaCheckCircle } from 'react-icons/fa'; // Import green checkmark icon

const Signup = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showModal, setShowModal] = useState(false); // State for modal visibility
  const [showForm, setShowForm] = useState(true); // State for form visibility
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    setShowForm(false); // Hide the signup form
    setShowModal(true); // Show the modal
  };

  const closeModal = () => {
    setShowModal(false); // Hide the modal
    navigate('/dashboard'); // Redirect to dashboard
  };

  return (
    <div className="signup-container">
      {showForm && (
        <div className="signup-card">
          <h1>Sign Up</h1>
          <form className="signup-form" onSubmit={handleSignup}>
            <input
              type="text"
              placeholder="First Name"
              className="form-input"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Last Name"
              className="form-input"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
            <input
              type="email"
              placeholder="Email Address"
              className="form-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              className="form-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Confirm Password"
              className="form-input"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
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
