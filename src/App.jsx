import { useState } from 'react'
import './App.css'
import Welcome from './Components/Welcome'
import Premier from './Components/Premier'
import Integrations from './Components/Integrations'
import FAQ from './Components/FAQ'
import Pricing from './Components/Pricing'
import Comments from './Components/Comments'
import Contact from './Components/Contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Welcome />
      <Premier />
      <Integrations />
      <FAQ />
      <Pricing />
      <Comments />
      <Contact />
    </>
  )
}

export default App
