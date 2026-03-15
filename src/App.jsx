
import gsap from 'gsap'
import './App.css'
import { ScrollTrigger, SplitText } from 'gsap/all'
import Navbar from './components/Navbar'
import Hero from './components/Hero'

import About from './components/About'
import Cocktails from './components/Cocktails'
import Art from './components/Art'

gsap.registerPlugin(ScrollTrigger, SplitText)

function App() {



  return (

    <main className='w-full overflow-x-hidden'>


    <Navbar/>

    <Hero/>
    <Cocktails/>
    <About/>
    <Art/>

    <div className='h-dvh bg-black'></div>
    </main>


  )
}

export default App
