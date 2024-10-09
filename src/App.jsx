import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import FAQ from './pages/FAQ/FAQ';
import Partners from './pages/Partners/Partners';
import Sobre from './pages/Sobre/Sobre.jsx';



function App() {
  return (
    <>
      <Router>
        <div>
          <Routes>
            <Route exact path='/' Component={ Home }/>
            <Route path='/faq' Component={ FAQ }/>
            <Route path='/partners' Component={ Partners } />
            <Route path='/sobre' Component={ Sobre } />
          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App
