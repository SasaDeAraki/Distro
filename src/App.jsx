import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';

function App() {
  return (
    <>
      <Router>
        <div>
          <Routes>
            <Route exact path='/' Component={ Home }/>
          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App
