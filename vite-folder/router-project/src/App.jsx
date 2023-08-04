import AboutApp from './components/About.jsx' 
// import ContactApp from './components/Contact.jsx' 
import ContactApp from './components/Contact.jsx' 
import HomeApp from './components/Home.jsx' 
import './App.css'

function App() {

  return (
    <>    
      {HomeApp()}
      {AboutApp()}
      {ContactApp()}
      {/* {Contact} */}
    </>
  )
}

export default App

