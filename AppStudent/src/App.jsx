import './index.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Admin from './components/Admin';
import Students from './components/Students';
function App() {
  return (
    <Router>
      <div className="flex flex-col h-screen w-screen">
        <Header />
          <div className="flex flex-1">
            <Sidebar />
              <Routes>
                <Route exact path="/dashboard" element={<Dashboard />} />
                <Route exact path="/admin" element={<Admin />} />
                <Route exact path="/students" element={<Students />} />
              </Routes>
          </div>
        <Footer />
      </div>
    </Router>
  );
}
export default App;
