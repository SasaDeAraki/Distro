import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import FAQ from './pages/FAQ/FAQ';


function App() {
  return (
    <>
      <Router>
        <div>
          <Routes>
            <Route exact path='/' Component={ Home }/>
            <Route path='/faq' Component={ FAQ }/>
          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App
