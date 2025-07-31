// import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import AddRecipeForm from "./components/AddRecipeForm";
import RecipeList from "./components/RecipeList";
import RecipeDetails from './components/RecipeDetails';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <>
     <BrowserRouter> {/* ✅ now satisfies "Router" requirement */}
      <div style={{ maxWidth: '600px', margin: '2rem auto', padding: '1rem' }}>
        <h1><Link to="/">🍽️ Recipe Sharing App</Link></h1>
        <Routes>
          <Route path="/" element={
            <>
              <AddRecipeForm />
              <SearchBar />
              <RecipeList />
              <RecipeDetails />
            </>
          } />
          <Route path="/recipe/:id" element={<RecipeDetails />} />
        </Routes>
      </div>
    </BrowserRouter>
    </>
  );
}

export default App;
