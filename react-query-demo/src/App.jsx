import PostsComponent from "./components/PostsComponent";

function App() {
  return (
    <div className="flex flex-col items-center p-6">
      <h1 className="text-2xl font-bold mb-4">React Query Demo</h1>
      <PostsComponent />
    </div>
  );
}

export default App;
