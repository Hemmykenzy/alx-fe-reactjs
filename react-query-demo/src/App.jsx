import { QueryClient, QueryClientProvider } from 'react-query'
import { useState } from 'react'
import PostsComponent from './components/PostsComponent.jsx'

// Configure sensible defaults to make caching visible
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 30 * 1000,
      // Don’t refetch just by tab focusing; we’ll do it manually with a button
      refetchOnWindowFocus: false,
      retry: 1,
    },
  },
})

export default function App() {
  const [show, setShow] = useState(true)

  return (
    <QueryClientProvider client={queryClient}>
      <div style={{ minHeight: '100svh', display: 'grid', placeItems: 'center', background: '#0b1220', color: '#e6ebff', padding: 24 }}>
        <div style={{ width: '100%', maxWidth: 900 }}>
          <h1 style={{ textAlign: 'center', marginBottom: 16 }}>React Query Demo (Posts)</h1>

          <div style={{ display: 'flex', gap: 8, justifyContent: 'center', marginBottom: 16 }}>
            <button
              onClick={() => setShow((s) => !s)}
              style={{ padding: '8px 12px', borderRadius: 8, border: '1px solid #3a4a7a', background: show ? '#1e2a4a' : 'transparent', color: 'inherit', cursor: 'pointer' }}
              title="Unmount/remount the component to see cached data"
            >
              {show ? 'Hide' : 'Show'} PostsComponent
            </button>
          </div>

          {show ? <PostsComponent /> : <p style={{ textAlign: 'center', opacity: 0.8 }}>PostsComponent unmounted — remount to see cached data load instantly.</p>}
        </div>
      </div>
    </QueryClientProvider>
  )
}