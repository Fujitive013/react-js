import './index.css'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Footer from './components/Footer'

function App() {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex flex-1 overflow-y-auto">
        <Sidebar />
        {/* Your main content goes here */}
      </div>
      <Footer />
    </div>
  );
}

export default App
