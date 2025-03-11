// importa react-router
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// importa layout
import MainLayout from "./layouts/MainLayout"

// importa le pages
import HomePage from './pages/HomePage';
import BookPage from './pages/MoviePage';

import './App.css'

function App() {


  return (
    <>
      <Router>
        <Routes>
          <Route element={<MainLayout />}>
            <Route index path="/" element={<HomePage />} />
            <Route path="/movies/:id" element={<BookPage />} />
          </Route>
        </Routes>
      </Router>


    </>
  )
}

export default App
