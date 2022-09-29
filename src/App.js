import ProjectTable from './components/ProjectTable'
import './styles/normalize.css'
import './styles/App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import ProjectId from './pages/ProjectIdPage'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProjectTable />} />
        <Route path="/project/:id" element={<ProjectId />} />
      </Routes>
    </Router>
  )
}

export default App
