import { useState } from 'react'
import './App.css'
import WeatherDashboard from './components/WeatherDashboard'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   
      <WeatherDashboard/>
    </>
  )
}

export default App
