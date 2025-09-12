import { Link } from 'react-router-dom'

const sample = Array.from({ length: 5 }, (_, i) => ({
  id: i + 1,
  title: `Sample Post ${i + 1}`
}))

export default function Blog() {
  return (
    <div>
      <h2>Blog</h2>
      <ul style={{ lineHeight: 1.9 }}>
        {sample.map((p) => (
          <li key={p.id}>
            <Link to={`/posts/${p.id}`}>{p.title}</Link>
          </li>
        ))}
      </ul>
      <p>Each link goes to a <code>/posts/:postId</code> dynamic route.</p>
    </div>
  )
}