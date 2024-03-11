import { useState } from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'

import './App.css'
import Signup from './Components/Signup'
import Signin from './Components/Signin'
import Home from './Components/Home'
import Note from './Components/Note'

import CreateSticky from './Components/CreateSticky'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/dashboard" element={<Note/>}/>
        <Route path="/*" element={<CreateSticky/>}/>
      </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
