import { useQuery } from "@tanstack/react-query";

// fetch function
const fetchPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!res.ok) {
    throw new Error("Failed to fetch posts");
  }
  return res.json();
};

function PostsComponent() {
  const {
    data: posts,
    isLoading,
    isError,
    error,
    refetch,
    isFetching,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
    staleTime: 1000 * 60, // cache fresh for 1 min
  });

  if (isLoading) return <p>Loading posts...</p>;
  if (isError) return <p className="text-red-500">Error: {error.message}</p>;

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-3">Posts</h2>

      <button
        onClick={() => refetch()}
        className="mb-4 bg-blue-500 text-white px-3 py-1 rounded"
      >
        {isFetching ? "Refreshing..." : "Refetch Posts"}
      </button>

      <ul className="space-y-2">
        {posts.slice(0, 10).map((post) => (
          <li key={post.id} className="border p-2 rounded">
            <h3 className="font-semibold">{post.title}</h3>
            <p className="text-sm">{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostsComponent;