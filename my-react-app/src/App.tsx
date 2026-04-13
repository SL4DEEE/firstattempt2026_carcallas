import { useState } from 'react'
import Login from './pages/Login'
import Home from './pages/Home'
import DonationHub from './pages/DonationHub'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [currentPage, setCurrentPage] = useState<'home' | 'donate' | 'career'>('home')

  const handleLogin = () => {
    setIsLoggedIn(true)
    setCurrentPage('home')
  }

  const handleLogout = () => {
    setIsLoggedIn(false)
    setCurrentPage('home')
  }

  const handleNavigate = (page: string) => {
    setCurrentPage(page as 'home' | 'donate' | 'career')
  }

  if (!isLoggedIn) {
    return <Login onLogin={handleLogin} />
  }

  switch (currentPage) {
    case 'donate':
      return <DonationHub onNavigate={handleNavigate} onLogout={handleLogout} />
    case 'home':
    default:
      return <Home onNavigate={handleNavigate} onLogout={handleLogout} />
  }
}

export default App
