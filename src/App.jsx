import Home from './components/Home'
import './App.css'
import Signup from './components/Signup'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom'



function App() {
  

  return (
    <Router>
    <Routes>
    <Route path="/" element= {<Home/>}/>
    <Route path="/Signup" element= {<Signup/>}/>
    
    </Routes>
    
    </Router>
  )
}

export default App
