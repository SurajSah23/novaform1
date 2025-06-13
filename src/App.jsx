import React from 'react'
import { Routes, Route } from 'react-router-dom'
import ChildAgeSelector from './components/ChildAgeSelector'
import ChildNameForm from './components/ChildNameForm'
import WelcomePage from './components/WelcomePage'

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <Routes>
        <Route path="/" element={<ChildAgeSelector />} />
        <Route path="/name" element={<ChildNameForm />} />
        <Route path="/welcome" element={<WelcomePage />} />
      </Routes>
    </div>
  )
}

export default App
