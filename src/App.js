import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import Index from './pages/Index'
import About from './pages/About'
import NotFound from './pages/NotFound'

function App() {
  return (
    <Router>
    <div className="App">
     <Header />
          <main>
     <Routes>
      <Route path='/' exact element={<Index />}/>
      <Route path='/about' element={<About />}/>
      <Route path='/*' element={<NotFound /> }/>
     </Routes>
          </main>
     <Footer />
    </div>
    </Router>
  

  
  );
}

export default App;
