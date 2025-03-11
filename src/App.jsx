// importa react-router
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css'

function App() {


  return (
    <>
      <Router>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route index path="/" element={<HomePage />} />
            <Route path="/books/:id" element={<BookPage />} />
          </Route>
        </Routes>
      </Router>


    </>
  )
}

export default App
