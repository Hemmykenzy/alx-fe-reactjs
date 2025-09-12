import { Navigate, useLocation } from 'react-router-dom'
import { useAuth } from '../auth/AuthContext'

export default function ProtectedRoute({ children }) {
  const { user } = useAuth()
  const location = useLocation()

  if (!user) {
    // Redirect to login, preserving the route we tried to visit
    return <Navigate to="/login" replace state={{ from: location }} />
  }
  return children
}