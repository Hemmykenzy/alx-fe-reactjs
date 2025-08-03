import axios from 'axios'

const API_URL = import.meta.env.VITE_APP_GITHUB_API_URL
const API_KEY = import.meta.env.VITE_APP_GITHUB_API_KEY

const api = axios.create({
  baseURL: API_URL,
  headers: API_KEY ? { Authorization: `token ${API_KEY}` } : {}
})

export const searchUsers = async (query) => {
  try {
    const response = await api.get(`/search/users?q=${query}`)
    return response.data.items
  } catch (error) {
    console.error('Error searching users:', error)
    throw error
  }
}

export default github;