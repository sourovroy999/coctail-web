
import gsap from 'gsap'
import './App.css'
import { ScrollTrigger, SplitText } from 'gsap/all'
import Navbar from './components/Navbar'
import Hero from './components/Hero'

gsap.registerPlugin(ScrollTrigger, SplitText)

function App() {



  return (

    <main className='w-full overflow-x-hidden'>

    <Navbar/>
    <Hero/>

    <div className='h-dvh bg-black'></div>
    </main>

  // <main>

  // </main>
  )
}

export default App
