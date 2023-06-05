import { useState, useEffect } from 'react'
import axios from 'axios'
import Location from './components/Location'
import ResidenList from './components/ResidentList'
import {getRandomDimension} from "./utils/random"
import './App.css'


function App() {
  const [location, setLocation] = useState(null)

  useEffect(() => {
  
    const URL =`https://rickandmortyapi.com/api/location/${getRandomDimension()}`
  
    axios.get(URL)
          .then(({data}) => setLocation(data))
          .catch((err) => console.log(err))

  }, [])

  return (
    <main className='bg-black min-h-screen text-white' >
      <Location location = {location} setLocation={setLocation}/>
      <ResidenList location={location} residents = {location?.residents}/>
    </main>
  )
}

export default App
