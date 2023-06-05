import axios from "axios"
import { useEffect, useState } from "react"

const Resident = ({residentUrl}) => {

    console.log(residentUrl)

    const [residentInfo, setResidentInfo] = useState(null)

    const statusStyles ={
      "Alive": "bg-green-500",
      "Dead": "bg-red-500",
      "unknown": "bg-gray-400"

    }


    useEffect(() => {
      axios.get(residentUrl)
            .then(({data})=> setResidentInfo(data))
            .catch((err)=> console.log(err))
    }, [])
    






  return (
    <article>
    <div className="relative px-14 top-12">
        <img className="rounded-full w-48 h-48 border-solid border-8 border-red-900/100 border-box " src={residentInfo?.image} alt="" />
        <div className="flex items-center gap-2 absolute bottom-3 left-1/2 -translate-x-1/2">
            <div className={`h-3 aspect-square ${statusStyles[residentInfo?.status]} rounded-full`}></div>
            {residentInfo?.status}
        </div>
    </div>
    <section className="border-solid border-4 border-red-900 rounded-3xl bg-purple-300" >
        <h4 className="bg-yellow-200 rounded-2xl h-20 text-justify text-2xl text-red-900 p-12 font-bold ">{residentInfo?.name}</h4>
        <ul className="bg-purple-300 rounded-2xl text-justify p-10 ">
            <li className="text-red-900 font-bold">Species : <span className="p-4 gap-7 text-white font-normal text-center">{residentInfo?.species}</span></li>
            <li className="text-red-900 font-bold">Origin : <span className="p-4 text-white font-normal text-center ">{residentInfo?.origin.name}</span></li>
            <li className="text-red-900 font-bold">Times apper : <span className="p-4 text-white font-normal" >{residentInfo?.episode.length}</span></li>
        </ul>
    </section>
</article>
  )
}

export default Resident