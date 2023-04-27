import About from './components/about'
import Fact from './components/facts'
import Footer from './components/footer'
import Header from './components/header'
import Hero from './components/heroSection'
import Porfolio from './components/portfolio'
import Resume from './components/resume'
import Skill from './components/skill'
import "./style.css"

const App = () =>{
  return (
    <>
    <Header/>
    <Hero/>
    <About/>
    <Fact/>
    <Skill/>
    <Resume/>
    <Porfolio/>
    <Footer/>
    </>
  )
}

export default App
