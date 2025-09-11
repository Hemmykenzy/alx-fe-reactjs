import { useQuery } from 'react-query'
import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'


const PAGE_SIZE = 10

function makeUrl(page) {
  // JSONPlaceholder supports pagination with _page and _limit
  return `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${PAGE_SIZE}`
}

async function fetchPosts({ queryKey }) {
  const [, page] = queryKey
  const res = await fetch(makeUrl(page))
  if (!res.ok) throw new Error('Failed to fetch posts')
  return res.json()
}

export default function PostsComponent() {
  const [page, setPage] = useState(1)

  const {
    data,
    isLoading,
    isFetching,
    isError,
    error,
    refetch,
    dataUpdatedAt,
  } = useQuery(
    ['posts', page],
    fetchPosts,
    {
      
      cacheTime: 5 * 60 * 1000,       
      staleTime: 30 * 1000,           
      refetchOnWindowFocus: false,    
      keepPreviousData: true,        
    }
  )

  if (isLoading) {
    return (
      <div style={{ background: '#121c36', padding: 16, borderRadius: 12, border: '1px solid #22315a' }}>
        <p>Loading posts…</p>
      </div>
    )
  }

  if (isError) {
    return (
      <div style={{ background: '#3a1520', padding: 16, borderRadius: 12, border: '1px solid #a43d52' }}>
        <p style={{ margin: 0 }}>Error: {error.message}</p>
        <button onClick={() => refetch()} style={{ marginTop: 10, padding: '8px 12px', borderRadius: 8, border: '1px solid #a43d52', background: 'transparent', color: 'inherit', cursor: 'pointer' }}>
          Try again
        </button>
      </div>
    )
  }

  const lastUpdated = new Date(dataUpdatedAt).toLocaleTimeString()

  return (
    <div style={{ background: '#121c36', padding: 16, borderRadius: 12, border: '1px solid #22315a' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
        <button
          onClick={() => refetch()}
          style={{ padding: '8px 12px', borderRadius: 8, border: '1px solid #3a4a7a', background: '#1e2a4a', color: 'inherit', cursor: 'pointer' }}
          title="Manually refetch from the server"
        >
          Refetch
        </button>
        <span style={{ opacity: 0.85 }}>
          {isFetching ? 'Updating…' : `Last updated: ${lastUpdated}`}
        </span>
      </div>

      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 10 }}>
        {data?.map((post) => (
          <li key={post.id} style={{ background: '#0f1830', border: '1px solid #3a4a7a', borderRadius: 10, padding: 12 }}>
            <strong style={{ display: 'block', marginBottom: 6 }}>{post.id}. {post.title}</strong>
            <span style={{ opacity: 0.9 }}>{post.body}</span>
          </li>
        ))}
      </ul>

      <div style={{ display: 'flex', gap: 8, justifyContent: 'center', marginTop: 16 }}>
        <button
          onClick={() => setPage((p) => Math.max(1, p - 1))}
          disabled={page === 1 || isFetching}
          style={{ padding: '8px 12px', borderRadius: 8, border: '1px solid #3a4a7a', background: 'transparent', color: 'inherit', cursor: 'pointer' }}
        >
          Prev
        </button>
        <span style={{ alignSelf: 'center' }}>Page {page}</span>
        <button
          onClick={() => setPage((p) => p + 1)}
          disabled={isFetching}
          style={{ padding: '8px 12px', borderRadius: 8, border: '1px solid #3a4a7a', background: 'transparent', color: 'inherit', cursor: 'pointer' }}
        >
          Next
        </button>
      </div>
    </div>
  )
}