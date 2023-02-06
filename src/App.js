import { Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './pages/Dashboard'
import TicketPage from './pages/TicketPage'
import Nav from './components/Nav'
import CategoriesContext from './context';
import { useState } from 'react';

function App() {

  const [categories, setCategories] = useState(null)
  const value = {categories, setCategories}

  return (
    <div className="app">
      <CategoriesContext.Provider value={value}>
      <Nav />
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/ticket' element={<TicketPage />} />
        <Route path='/ticket/:id' element={<TicketPage editMode={true} />} />
      </Routes>
      </CategoriesContext.Provider>
    </div>
  )
}

export default App;
