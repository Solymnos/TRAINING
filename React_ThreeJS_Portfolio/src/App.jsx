import Contact from "./components/Contact"
import Hero from "./components/Hero"
import Who from "./components/Who"
import Works from "./components/Works"

function App() {


  return (
   <div className="h-screen snap-y snap-mandatory scroll-smooth overflow-y-auto no-scrollbar text-white bg-[url('./img/bg.jpeg')]">
    <Hero/>
    <Who/>
    <Works/>
    <Contact/>
   </div>
  )
}

export default App
