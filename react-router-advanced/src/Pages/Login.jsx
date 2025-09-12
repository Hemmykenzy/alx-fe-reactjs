import { useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '../auth/AuthContext'
import { useState } from 'react'

export default function Login() {
  const { login } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()
  const [name, setName] = useState('')

  const from = location.state?.from?.pathname || '/profile'

  const handleLogin = (e) => {
    e.preventDefault()
    login(name || 'demo')
    navigate(from, { replace: true })
  }

  return (
    <div>
      <h2>Login</h2>
      <p>You must log in to view protected pages.</p>
      <form onSubmit={handleLogin} style={{ display: 'grid', gap: 8, maxWidth: 320 }}>
        <input
          placeholder="Username (optional)"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ padding: '8px 10px', borderRadius: 8, border: '1px solid #3a4a7a' }}
        />
        <button type="submit" style={{ padding: '8px 12px', borderRadius: 8, border: '1px solid #3a4a7a', background: '#1e2a4a', color: 'inherit' }}>
          Log In
        </button>
      </form>
    </div>
  )
}