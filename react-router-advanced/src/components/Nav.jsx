import { NavLink } from 'react-router-dom'
import { useAuth } from '../auth/AuthContext'

export default function Nav() {
  const { user, logout } = useAuth()

  const linkStyle = ({ isActive }) => ({
    padding: '8px 12px',
    borderRadius: 8,
    border: '1px solid #3a4a7a',
    background: isActive ? '#1e2a4a' : 'transparent',
    color: 'inherit',
    textDecoration: 'none',
  })

  return (
    <nav style={{ display: 'flex', gap: 8, alignItems: 'center', marginBottom: 16 }}>
      <NavLink to="/" style={linkStyle} end>Home</NavLink>
      <NavLink to="/about" style={linkStyle}>About</NavLink>
      <NavLink to="/blog" style={linkStyle}>Blog</NavLink>
      <NavLink to="/posts/42" style={linkStyle}>Dynamic Post 42</NavLink>
      <NavLink to="/profile" style={linkStyle}>Profile (Protected)</NavLink>

      <div style={{ marginLeft: 'auto', display: 'flex', gap: 8, alignItems: 'center' }}>
        {user ? (
          <>
            <span style={{ opacity: 0.9 }}>Hi, {user.name}</span>
            <button onClick={logout} style={{ padding: '6px 10px', borderRadius: 8, border: '1px solid #3a4a7a', background: 'transparent', color: 'inherit' }}>
              Logout
            </button>
          </>
        ) : (
          <NavLink to="/login" style={linkStyle}>Login</NavLink>
        )}
      </div>
    </nav>
  )
}