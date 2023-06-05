import axios from "axios"

const Location = ({location, setLocation}) => {

    console.log(location)
    
    const handleSubmit = (e) =>{
      e.preventDefault()
      const newLocation = e.target.NewLocation.value
    
      const URL =`https://rickandmortyapi.com/api/location/${newLocation}`
      
      axios.get(URL)
            .then(({data}) => setLocation(data))
            .catch((err) => console.log(err))
    }
    
    
      return (
        <section className=" bg-[url(/images/backgroundimage/initbackground.png)] bg-cover grid grid-rows-2 ">
            {/* input de busqueda */}
            <form className="bg-[url(/images/name.png)] bg-auto bg-no-repeat bg-center text-center pt-60" onSubmit={handleSubmit}>
              <input id="NewLocation" className="text-black text-center border-solid border-2 border-red-900/100 rounded-xl p-2 w-auto" placeholder="Type a location Id" type="text" />
              <button className="right-0 bg-amber-300 rounded-xl gap-3 p-1 border-solid border-2 border-red-900/100">Search<i className='bx bx-search item p-2 gap-2'></i></button>
            </form>
    
            {/* info de location*/}
            <section className="grid grid-rows-2 h-auto items-center">
                <h2 className="bg-slate-500/50 text-center h-auto" >{location?.name}</h2>
                <ul className="grid grid-cols-3 text-center bg-gray-500/50 h-auto">
                    <li>type: {location?.type}</li>
                    <li>Dimension: {location?.dimension}</li>
                    <li>Population: {location?.residents.length}</li>
                </ul>
            </section>
        </section>
      )
    }

export default Location