import { useRef, useState } from 'react'
import './App.css'
import useFetch from './hooks/useFetch'
import getRandomLocation from './utils/getRandomLocation'
import LocationInfo from './components/LocationInfo'
import ResidenInfo from './components/ResidenInfo'
import MainContent from './components/MainContent'

function App() {






  const [inputValue, setInputValue] = useState(getRandomLocation())
  const url = `https://rickandmortyapi.com/api/location/${inputValue}`
  const [location, hasError] = useFetch(url)

  const inptLocation = useRef()

  const handleSumbit = event => {
    event.preventDefault()
    //event.target.firstChild.value
    setInputValue(inptLocation.current.value)

  }

  return (
    <div className="App">
      <img src="/rick__morty.png" alt="" />
      <form className='app_form' onSubmit={handleSumbit} >
        <input className='app_input' ref={inptLocation} type="text" />
        <button className='app_btn' >Search</button>
      </form>

      {
        hasError
          ? <h1 className='app_error'>❌ Hey! you must provide an id from 1 to 126😫</h1>
          : <MainContent 
              location={location} 
              />
      }



    </div>
  )
}

export default App
