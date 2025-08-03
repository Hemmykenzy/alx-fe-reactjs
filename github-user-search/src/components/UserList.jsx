import { FaGithub } from 'react-icons/fa'

const UserList = ({ users }) => {
  if (users.length === 0) {
    return <div className="empty-state">No users found. Try a search!</div>
  }

  return (
    <div className="user-list">
      {users.map(user => (
        <div key={user.id} className="user-card">
          <img src={user.avatar_url} alt={user.login} />
          <div className="user-info">
            <h3>{user.login}</h3>
            <a href={user.html_url} target="_blank" rel="noopener noreferrer">
              <FaGithub /> View Profile
            </a>
          </div>
        </div>
      ))}
    </div>
  )
}

export default UserList