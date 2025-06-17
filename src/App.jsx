
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home'
import UseState from './UseState'
import UseEffect from './UseEffect'

const App = () => {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/usestate" element={<UseState />} />
        <Route path="/useeffect" element={<UseEffect />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
