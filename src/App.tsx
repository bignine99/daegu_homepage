import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Technology from './pages/Technology';
import Research from './pages/Research';
import Contact from './pages/Contact';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="profile" element={<Profile />} />
          <Route path="technology" element={<Technology />} />
          <Route path="research" element={<Research />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
