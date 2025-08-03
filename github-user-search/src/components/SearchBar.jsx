import { useState } from 'react'
import { FiSearch } from 'react-icons/fi'
import { searchUsers } from '../services/githubApi'

const SearchBar = ({ setUsers }) => {
  const [query, setQuery] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!query.trim()) return
    
    setLoading(true)
    try {
      const results = await searchUsers(query)
      setUsers(results)
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="search-form">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search GitHub users..."
      />
      <button type="submit" disabled={loading}>
        <FiSearch /> {loading ? 'Searching...' : 'Search'}
      </button>
    </form>
  )
}

export default SearchBar