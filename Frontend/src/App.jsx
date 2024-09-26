import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Profile from './pages/Profile';

const App = () => {
  
  return (
    <Router>
        <Routes>
          <Route path="/user/:id" element={<Profile />} />
        </Routes>
    </Router>
  )
}

export default App