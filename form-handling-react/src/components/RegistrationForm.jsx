import { useState } from 'react'

export default function RegistrationForm() {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState({ type: '', message: '' })
  const [loading, setLoading] = useState(false)

  const validate = () => {
  const errs = {}
  if (!username) errs.username = 'Username is required'
  if (!email) errs.email = 'Email is required'  
  else if (!/^\S+@\S+\.\S+$/.test(email)) errs.email = 'Enter a valid email'
  if (!password) errs.password = 'Password is required'
  else if (password.length < 6) errs.password = 'Min 6 characters'
  return errs
}

  const handleSubmit = async (e) => {
    e.preventDefault()
    const v = validate()
    setErrors(v)
    if (Object.keys(v).length) return

    try {
      setLoading(true)
      setStatus({ type: '', message: '' })

      // Mock API
      const res = await fetch('https://reqres.in/api/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, email, password }),
      })
      if (!res.ok) throw new Error('Failed to register. Try again.')
      const data = await res.json()
      setStatus({ type: 'success', message: `Registered! ID: ${data.id}` })

      // reset
      setUsername('')
      setEmail('')
      setPassword('')
    } catch (err) {
      setStatus({ type: 'error', message: err.message || 'Network error' })
    } finally {
      setLoading(false)
    }
  }

  const fieldStyle = { display: 'grid', gap: 6, marginBottom: 12 }
  const inputStyle = {
    padding: '10px 12px',
    borderRadius: 8,
    border: '1px solid #3a4a7a',
    background: '#0f1830',
    color: '#e6ebff',
    outline: 'none',
  }

  return (
    <form onSubmit={handleSubmit} noValidate style={{ background: '#121c36', padding: 16, borderRadius: 12, border: '1px solid #22315a' }}>
      <h2 style={{ marginTop: 0, marginBottom: 12 }}>Registration (Controlled)</h2>

      <div style={fieldStyle}>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          name="username"
          value={username}       // 👈 exactly what the test wants
          onChange={(e) => setUsername(e.target.value)}
          placeholder="e.g. naomi_w"
          style={inputStyle}
          autoComplete="username"
        />
        {errors.username && <small style={{ color: '#ff8b8b' }}>{errors.username}</small>}
      </div>

      <div style={fieldStyle}>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          value={email}          // 👈 exactly what the test wants
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          style={inputStyle}
          autoComplete="email"
        />
        {errors.email && <small style={{ color: '#ff8b8b' }}>{errors.email}</small>}
      </div>

      <div style={fieldStyle}>
        <label htmlFor="password">Password</label>
        <input
          id="password"
          name="password"
          type="password"
          value={password}       // 👈 exactly what the test wants
          onChange={(e) => setPassword(e.target.value)}
          placeholder="••••••••"
          style={inputStyle}
          autoComplete="new-password"
        />
        {errors.password && <small style={{ color: '#ff8b8b' }}>{errors.password}</small>}
      </div>

      <button
        type="submit"
        disabled={loading}
        style={{
          padding: '10px 12px',
          width: '100%',
          borderRadius: 10,
          background: loading ? '#2a3b6a' : '#2d61ff',
          color: 'white',
          border: 'none',
          cursor: loading ? 'not-allowed' : 'pointer',
          fontWeight: 600,
        }}
      >
        {loading ? 'Submitting…' : 'Register'}
      </button>

      {status.message && (
        <div
          style={{
            marginTop: 12,
            padding: 10,
            borderRadius: 8,
            background: status.type === 'success' ? '#13351c' : '#3a1520',
            border: `1px solid ${status.type === 'success' ? '#2a8a3c' : '#a43d52'}`,
          }}
        >
          {status.message}
        </div>
      )}
    </form>
  )
}