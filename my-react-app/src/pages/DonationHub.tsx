import { useState } from 'react'
import '../styles/DonationHub.css'

interface Appeal {
  id: number
  title: string
  image: string
  verified: boolean
  amount: number
  goal: number
}

interface DonationHubProps {
  onNavigate: (page: string) => void
  onLogout: () => void
}

export default function DonationHub({ onNavigate, onLogout }: DonationHubProps) {
  const [appeals] = useState<Appeal[]>([
    {
      id: 1,
      title: 'Class of \'24 Scholarship F...',
      image: '👩‍🎓',
      verified: true,
      amount: 4500,
      goal: 5000
    },
    {
      id: 2,
      title: 'Robotics Club Finals Trip',
      image: '🤖',
      verified: true,
      amount: 4800,
      goal: 6200
    },
    {
      id: 3,
      title: 'Medical Aid for Alumni Jo...',
      image: '🏥',
      verified: true,
      amount: 2000,
      goal: 10000
    }
  ])

  return (
    <div className="donation-hub-container">
      {/* Header */}
      <div className="hub-header">
        <h1>Donation Hub</h1>
        <p>Support University Initiatives</p>
      </div>

      {/* Scrollable Content */}
      <div style={{ flex: 1, overflowY: 'auto', overflowX: 'hidden' }}>
        {/* Search and Filters */}
        <div className="hub-search">
          <div className="search-box">
            <input 
              type="text" 
              placeholder="Find a cause, project, or fund..."
            />
            <button className="filter-btn">⚙️</button>
          </div>
        </div>

        {/* Impact Stats */}
        <div className="impact-section">
          <div className="impact-card">
            <div className="impact-amount">$1,250.00</div>
            <div className="impact-label">YOUR TOTAL IMPACT</div>
            <button className="impact-btn">
              <span>→</span>
            </button>
          </div>
        </div>

        {/* CTA Button */}
        <div className="cta-section">
          <button className="make-impact-btn">Make an Impact Today</button>
        </div>

        {/* Quick Actions Grid */}
        <div className="quick-actions">
          <div className="action-card">
            <div className="action-icon">📱</div>
            <div className="action-label">Connect</div>
          </div>
          <div className="action-card">
            <div className="action-icon">✓</div>
            <div className="action-label">Approved</div>
          </div>
          <div className="action-card">
            <div className="action-icon">💼</div>
            <div className="action-label">Business</div>
          </div>
          <div className="action-card">
            <div className="action-icon">👨‍🎓</div>
            <div className="action-label">Student Projects</div>
          </div>
          <div className="action-card">
            <div className="action-icon">👥</div>
            <div className="action-label">Community Initiatives</div>
          </div>
          <div className="action-card">
            <div className="action-icon">🚨</div>
            <div className="action-label">Emergency Fund</div>
          </div>
        </div>

        {/* Start Campaign */}
        <div className="campaign-section">
          <button className="start-campaign-btn">+ Start a Campaign</button>
        </div>

        {/* Verified Appeals Section */}
        <div className="appeals-header">
          <h2>Verified Urgent Appeals</h2>
          <a href="#" className="see-all">See All</a>
        </div>

        {/* Appeals List */}
        <div className="appeals-list">
          {appeals.map((appeal) => (
            <div key={appeal.id} className="appeal-card">
              <div className="appeal-image">{appeal.image}</div>
              <div className="appeal-content">
                <div className="appeal-title-row">
                  <h3>{appeal.title}</h3>
                  {appeal.verified && <span className="verified-badge">✓ VERIFIED</span>}
                </div>
                <div className="appeal-progress">
                  <div className="progress-bar">
                    <div 
                      className="progress-fill"
                      style={{ width: `${(appeal.amount / appeal.goal) * 100}%` }}
                    ></div>
                  </div>
                  <div className="progress-text">
                    ${appeal.amount.toLocaleString()} / ${appeal.goal.toLocaleString()}
                  </div>
                </div>
                <button className="donate-btn">Donate Now</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Navigation */}
      <nav className="bottom-nav">
        <button 
          className="nav-item"
          onClick={() => onNavigate('home')}
        >
          <span className="nav-icon">🏠</span>
          <span className="nav-label">Home</span>
        </button>
        <button className="nav-item">
          <span className="nav-icon">👥</span>
          <span className="nav-label">Network</span>
        </button>
        <button className="nav-item active">
          <span className="nav-icon">💝</span>
          <span className="nav-label">Donate</span>
        </button>
        <button className="nav-item">
          <span className="nav-icon">💼</span>
          <span className="nav-label">Career</span>
        </button>
        <button 
          className="nav-item"
          onClick={onLogout}
        >
          <span className="nav-icon">📄</span>
          <span className="nav-label">Documents</span>
        </button>
      </nav>
    </div>
  )
}
