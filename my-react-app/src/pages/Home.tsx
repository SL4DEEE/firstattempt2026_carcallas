import { useState } from 'react'
import '../styles/Home.css'

interface ActivityItem {
  id: number
  type: 'mentor' | 'donation' | 'job'
  title: string
  description: string
  timeAgo: string
  icon: string
}

interface HomeProps {
  onNavigate: (page: string) => void
  onLogout: () => void
}

export default function Home({ onNavigate, onLogout }: HomeProps) {
  const [activities] = useState<ActivityItem[]>([
    {
      id: 1,
      type: 'mentor',
      title: 'New Mentor Message',
      description: 'Dr. Reyes replied to your inquiry about...',
      timeAgo: '15m ago',
      icon: '👤'
    },
    {
      id: 2,
      type: 'donation',
      title: 'Donation Receipt Ready',
      description: 'Thank you for your contribution to the...',
      timeAgo: '2h ago',
      icon: '💝'
    },
    {
      id: 3,
      type: 'job',
      title: 'Job Application Update',
      description: 'Your application for "Project Manager" wa...',
      timeAgo: '1d ago',
      icon: '💼'
    }
  ])

  return (
    <div className="home-container">
      {/* Header */}
      <div className="home-header">
        <div className="header-top">
          <button className="menu-btn">☰</button>
          <button className="profile-btn">👤</button>
        </div>
        <div className="greeting-section">
          <p className="welcome-text">Welcome back,</p>
          <h1 className="greeting">Hello, Alex</h1>
          <div className="illustration">👨‍💼</div>
        </div>
      </div>

      {/* Quick Navigation */}
      <div className="quick-nav">
        <button className="nav-btn">Network</button>
        <button 
          className="nav-btn"
          onClick={() => onNavigate('donate')}
        >
          Donate
        </button>
        <button 
          className="nav-btn"
          onClick={() => onNavigate('career')}
        >
          Career
        </button>
        <button className="nav-btn">Docs</button>
        <button className="nav-btn search-btn">🔍</button>
      </div>

      {/* Scrollable Content */}
      <div style={{ flex: 1, overflowY: 'auto', overflowX: 'hidden' }}>
        {/* Daily Snapshot */}
        <div className="daily-snapshot">
          <h2>Your Daily Snapshot</h2>
          <div className="snapshot-grid">
            <div className="snapshot-card">
              <div className="snapshot-icon">💼</div>
              <h3>Jobs for You</h3>
              <p className="snapshot-value">5</p>
              <p className="snapshot-label">new matches</p>
            </div>
            <div className="snapshot-card">
              <div className="snapshot-icon">✓</div>
              <h3>Verified Status</h3>
              <p className="snapshot-value">95%</p>
              <p className="snapshot-label">Profile</p>
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="recent-activity">
          <div className="activity-header">
            <h2>Your Recent Activity</h2>
            <a href="#" className="view-all">View All</a>
          </div>

          <div className="activity-list">
            {activities.map((activity) => (
              <div key={activity.id} className="activity-item">
                <div className={`activity-icon type-${activity.type}`}>
                  {activity.icon}
                </div>
                <div className="activity-content">
                  <h3>{activity.title}</h3>
                  <p>{activity.description}</p>
                </div>
                <div className="activity-time">{activity.timeAgo}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <nav className="bottom-nav">
        <button className="nav-item active">
          <span className="nav-icon">🏠</span>
          <span className="nav-label">Home</span>
        </button>
        <button className="nav-item">
          <span className="nav-icon">👥</span>
          <span className="nav-label">Network</span>
        </button>
        <button 
          className="nav-item"
          onClick={() => onNavigate('donate')}
        >
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
