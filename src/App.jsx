import { useRef, useState } from 'react'
import './App.css'
import useFetch from './hooks/useFetch'
import getRandomLocation from './utils/getRandomLocation'
import MainContent from './components/MainContent'

function App() {


  const [inputValue, setInputValue] = useState(getRandomLocation())
  const url = `https://rickandmortyapi.com/api/location/${inputValue || 4}`
  const [location, hasError] = useFetch(url)

  const inptLocation = useRef()

  const [pagerickMorty, setPagerickMortt] = useState(8)
  const [currentPage, setCurrentPage] = useState(1)
    

  const handleSumbit = event => {
    event.preventDefault()
    //event.target.firstChild.value
    setInputValue(inptLocation.current.value)
    setCurrentPage(1)
  }
  

  return (
    <div className="App">
      <img src="/rick__morty.png" alt="" />
      <form className='app_form' onSubmit={handleSumbit} >
        <input className='app_input' ref={inptLocation} type="text" placeholder='Ingrese Id (1-126) ' />
        <button className='app_btn' >Search</button>
      </form>

      {
        hasError
          ? <h1 className='app_error'>❌ Hey! you must provide an id from 1 to 126😫</h1>
          : <MainContent
            location={location}
            pagerickMorty={pagerickMorty}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
      }



    </div>
  )
}

export default App
