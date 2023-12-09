import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Category from './Components/Pages/CategoryPage/Catagory';
import Register from './Components/Pages/RegistrationPage/Register';
import Home from './Components/Pages/HomePage/Home';
import MoviesPage from './Components/Pages/MoviesPage/MoviePage';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/category" element={<Category />} />
        <Route path="/home" element={<Home />} />
        <Route path="/movies" element={<MoviesPage />} />
      </Routes>
    </Router>
  );
}

export default App;
