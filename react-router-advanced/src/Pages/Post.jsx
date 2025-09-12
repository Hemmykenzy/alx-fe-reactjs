import { useParams } from 'react-router-dom'

export default function Post() {
  const { postId } = useParams()
  return (
    <div>
      <h2>Post #{postId}</h2>
      <p>This content is rendered by a dynamic route using <code>:postId</code>.</p>
    </div>
  )
}