import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Eye, EyeOff, Lock, Mail, Shield } from 'lucide-react';

function Adminlogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  async function handlesubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    try {
      const user = { email, password };
      const res = await axios.post('http://localhost:3000/api/admin', user);
      if (res.data.msg === 'success') {
        window.alert('Welcome back');
       
      } else {
        window.alert('Username or password is wrong');
      }
    } catch (error) {
      console.error('Login error:', error);
      window.alert('An error occurred. Please try again.');
       navigate('/admindash');
    } finally {
      setIsLoading(false);
    }
  }

  const containerStyle = {
    minHeight: '100vh',
   width:"100%",
    backgroundImage:
      "url('https://tse1.mm.bing.net/th/id/OIP.LNlfNpQra-oV5Iw8LZh5TgHaEo?pid=Api&P=0&h=180')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    
  };

  const cardStyle = {
    width: '100%',
    maxWidth: '500px',
    borderRadius: '20px',
    padding: '40px',
    background: 'rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(15px)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    boxShadow: '0 25px 45px rgba(0, 0, 0, 0.2)',
    color: '#fff',
  };

  const inputGroup = {
    position: 'relative',
    marginBottom: '24px',
  };

  const inputStyle = {
    width: '100%',
    padding: '12px 44px',
    borderRadius: '12px',
    border: '1px solid rgba(255, 255, 255, 0.3)',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    color: '#fff',
    outline: 'none',
    fontSize: '16px',
  };

  const iconStyle = {
    position: 'absolute',
    top: '65%',
    left: '14px',
    transform: 'translateY(-50%)',
    color: '#ffffffb3',
  };
  const iconStylee = {
position: 'absolute',
    // top: '100%',
    right: '10px',
    transform: 'translate(-50%)',
    color: '#ffffffb3',
  };

  const toggleButtonStyle = {
    position: 'absolute',
    top: '55%',
    right: '14px',
    transform: 'translateY(-50%)',
    background: 'none',
    border: 'none',
    color: '#ffffffb3',
    cursor: 'pointer',
  };

  const buttonStyle = {
    width: '100%',
    padding: '12px',
    borderRadius: '12px',
    border: 'none',
    background: 'linear-gradient(135deg, #ff6b35, #f7931e)',
    color: '#fff',
    fontWeight: 'bold',
    fontSize: '18px',
    marginTop: '20px',
  };

  const footerStyle = {
    marginTop: '30px',
    fontSize: '14px',
    color: 'rgba(255, 255, 255, 0.8)',
    textAlign: 'center',
    borderTop: '1px solid rgba(255, 255, 255, 0.2)',
    paddingTop: '20px',
  };

  return (
    
    <div className='container-fluid ' style={containerStyle}>
      <div style={cardStyle}>
        <div style={{ textAlign: 'center', marginBottom: '30px' }}>
          <Shield size={50} />
          <h2 style={{ fontWeight: '700', fontSize: '28px', marginTop: '16px' }}>
            Admin Login
          </h2>
        </div>

        <form onSubmit={handlesubmit}>
          <div style={inputGroup}>
            <label style={{ fontWeight: '600', marginBottom: '8px', display: 'block' }}>
              Email Address
            </label>
            <Mail size={20} style={iconStyle} />
            <input
              type="email"
              style={inputStyle}
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={isLoading}
              required
            />
          </div>

          <div style={inputGroup}>
            <label style={{ fontWeight: '600', marginBottom: '8px', display: 'block' }}>
              Password
            </label>
            <Lock size={20} style={iconStyle} />
            <input
              type={showPassword ? 'text' : 'password'}
              style={inputStyle}
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={isLoading}
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              style={toggleButtonStyle}
              disabled={isLoading}
            >
              {showPassword ? <EyeOff size={20} style={iconStylee} /> : <Eye size={20} style={iconStylee}/>}
            </button>
          </div>

          <button type="submit" style={buttonStyle} disabled={isLoading}>
            {isLoading ? 'Signing in...' : 'Login'}
          </button>
        </form>

        <div style={footerStyle}>
          Protected by enterprise-grade security • Contact IT support if you need help
        </div>
      </div>
    </div>
    
  );
}

export default Adminlogin;
