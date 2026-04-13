import { useState } from 'react'
import '../styles/Login.css'

interface LoginProps {
  onLogin: () => void
}

export default function Login({ onLogin }: LoginProps) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    if (email && password) {
      console.log('Login attempt:', { email, password })
      onLogin()
    }
  }

  const handleBiometricLogin = () => {
    console.log('Biometric login attempted')
    onLogin()
  }

  return (
    <div className="login-container">
      {/* Header */}
      <div className="login-header">
        <div className="logo-section">
          <span className="logo-text">ADDU</span>
          <div className="shield-logo">
            <div className="shield-content">
              <div className="shield-quarter tl">IHS</div>
              <div className="shield-quarter tr">🌊</div>
              <div className="shield-quarter bl">≡</div>
              <div className="shield-quarter br">⚜️</div>
            </div>
          </div>
          <span className="logo-text">NATION</span>
        </div>
      </div>

      {/* Login Card */}
      <div className="login-card">
        {/* Biometric Login */}
        <div className="biometric-section">
          <div className="biometric-icon">👤</div>
          <h2>Biometric Login</h2>
          <p>Use Biometric Link to retrieve record</p>
          <button className="biometric-btn" onClick={handleBiometricLogin}>
            →
          </button>
        </div>

        {/* Divider */}
        <div className="divider">
          <span>OR LOGIN WITH</span>
        </div>

        {/* Login Form */}
        <form onSubmit={handleLogin} className="login-form">
          <div className="form-group">
            <label htmlFor="email">UNIVERSITY ID / EMAIL</label>
            <div className="input-wrapper">
              <span className="input-icon">📋</span>
              <input
                id="email"
                type="email"
                placeholder="20XX-XXXXX"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          <div className="form-group">
            <div className="password-header">
              <label htmlFor="password">PASSWORD</label>
              <a href="#forgot" className="forgot-link">Forgot?</a>
            </div>
            <div className="input-wrapper">
              <span className="input-icon">🔒</span>
              <input
                id="password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <button type="submit" className="login-btn">
            Log In →
          </button>
        </form>

        {/* Footer Links */}
        <div className="login-footer">
          <a href="#help" className="footer-link">Need Help?</a>
          <a href="#signup" className="footer-link">Create Account</a>
        </div>
      </div>
    </div>
  )
}
