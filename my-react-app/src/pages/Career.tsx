import { useState } from 'react'
import '../styles/Career.css'

interface Job {
  id: number
  title: string
  company: string
  location: string
  salary: string
  type: string
  remote: boolean
  icon: string
  saved?: boolean
}

interface Mentor {
  id: number
  name: string
  year: string
  title: string
  company: string
  description: string
  avatar: string
  canHelp: string
}

interface CareerProps {
  onNavigate: (page: string) => void
  onLogout: () => void
}

export default function Career({ onNavigate, onLogout }: CareerProps) {
  const [activeTab, setActiveTab] = useState<'jobs' | 'mentorship' | 'workshops'>('jobs')
  const [savedJobs, setSavedJobs] = useState<number[]>([])

  const [jobs] = useState<Job[]>([
    {
      id: 1,
      title: 'Senior Product Designer',
      company: 'Google',
      location: 'Mountain View, CA',
      salary: '$140k - $180k',
      type: 'Full-time',
      remote: true,
      icon: '🔍',
      saved: false
    },
    {
      id: 2,
      title: 'UX Researcher',
      company: 'Spotify',
      location: 'New York, NY',
      salary: '$110k - $145k',
      type: 'Contract',
      remote: false,
      icon: '🎵',
      saved: false
    }
  ])

  const [mentors] = useState<Mentor[]>([
    {
      id: 1,
      name: "Sarah Jenkins, '15",
      year: '15',
      title: 'VP Marketing',
      company: 'Adobe',
      description: 'Specializing in digital strategy and brand growth. Happy to review...',
      avatar: '👩‍💼',
      canHelp: 'DK'
    }
  ])

  const toggleSaveJob = (jobId: number) => {
    setSavedJobs(prev =>
      prev.includes(jobId) ? prev.filter(id => id !== jobId) : [...prev, jobId]
    )
  }

  return (
    <div className="career-container">
      {/* Header */}
      <div className="career-header">
        <h1>Career Opportunities</h1>
        <p>Discover and connect with peers</p>
      </div>

      {/* Search */}
      <div className="career-search">
        <div className="search-box">
          <input 
            type="text" 
            placeholder="Search alumni by name, year, or industry"
          />
          <button className="filter-btn">⚙️</button>
        </div>
      </div>

      {/* Tabs */}
      <div className="career-tabs">
        <button 
          className={`tab-btn ${activeTab === 'jobs' ? 'active' : ''}`}
          onClick={() => setActiveTab('jobs')}
        >
          Job Board
        </button>
        <button 
          className={`tab-btn ${activeTab === 'mentorship' ? 'active' : ''}`}
          onClick={() => setActiveTab('mentorship')}
        >
          Mentorship
        </button>
        <button 
          className={`tab-btn ${activeTab === 'workshops' ? 'active' : ''}`}
          onClick={() => setActiveTab('workshops')}
        >
          Workshops
        </button>
      </div>

      {/* Scrollable Content */}
      <div style={{ flex: 1, overflowY: 'auto', overflowX: 'hidden' }}>
        {activeTab === 'jobs' && (
          <>
            {/* Recommended Jobs Section */}
            <div className="jobs-section">
              <div className="section-header">
                <h2>Recommended Jobs</h2>
                <a href="#" className="view-all">View All</a>
              </div>

              <div className="jobs-list">
                {jobs.map((job) => (
                  <div key={job.id} className="job-card">
                    <div className="job-header">
                      <div className="job-icon">{job.icon}</div>
                      <div className="job-title-section">
                        <h3>{job.title}</h3>
                        <p className="job-company">{job.company} • {job.location}</p>
                      </div>
                      <button 
                        className={`save-btn ${savedJobs.includes(job.id) ? 'saved' : ''}`}
                        onClick={() => toggleSaveJob(job.id)}
                      >
                        🔖
                      </button>
                    </div>

                    <div className="job-details">
                      <span className="job-tag">{job.salary}</span>
                      <span className="job-tag">{job.type}</span>
                      {job.remote && <span className="job-tag remote">Remote</span>}
                    </div>

                    <button className="apply-btn">Apply Now</button>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}

        {activeTab === 'mentorship' && (
          <>
            {/* Meet Alumni Mentors Section */}
            <div className="mentors-section">
              <div className="section-header">
                <h2>Meet Alumni Mentors</h2>
                <a href="#" className="view-all">View All</a>
              </div>

              <div className="mentors-list">
                {mentors.map((mentor) => (
                  <div key={mentor.id} className="mentor-card">
                    <div className="mentor-header">
                      <div className="mentor-avatar">{mentor.avatar}</div>
                      <div className="mentor-info">
                        <h3>{mentor.name}</h3>
                        <p className="mentor-title">{mentor.title} @ {mentor.company}</p>
                      </div>
                      <div className="mentor-badge">{mentor.canHelp}</div>
                    </div>

                    <p className="mentor-description">{mentor.description}</p>

                    <button className="request-btn">Request Meeting</button>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}

        {activeTab === 'workshops' && (
          <div className="workshops-section">
            <div className="empty-state">
              <p>No workshops available at the moment</p>
            </div>
          </div>
        )}
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
        <button 
          className="nav-item"
          onClick={() => onNavigate('donate')}
        >
          <span className="nav-icon">💝</span>
          <span className="nav-label">Donate</span>
        </button>
        <button className="nav-item active">
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
