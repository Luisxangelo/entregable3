import { useEffect, useState } from "react"
import Resident from "./Resident"
import { paginationLogic } from "../utils/pagination"

const FIRST_PAGE = 1
const ResidenList = ({residents, location}) => {

const [currentPage, setCurrentPage] = useState(FIRST_PAGE)

const{pages,residentsPage} =  paginationLogic(currentPage, residents)

useEffect(() => {
  setCurrentPage(FIRST_PAGE)

}, [location])


  return (
    <section className="bg-[url(/images/backgroundimage/lastbackground.png)] bg-no-repeat bg-bottom px-3">
        {/* Lista de Residentes */}
        <section className="grid gap-8 grid-cols-[repeat(auto-fill,_280px)] justify-center max-w-[1024px] mx-auto py-6"> 
            {
                residentsPage?.map((resident)=> <Resident key={resident} residentUrl={resident}/>)}
        </section>
        {/* paginacion */}
        <section className=" flex justify-center gap-4 flex-wrap py-8">
          {
            pages.map((page) => <button key={page} onClick={()=> setCurrentPage(page)} className={` p-2 px-3 rounded-full ${currentPage === page? "bg-red-900 border-solid border-4 border-yellow-600 text-yellow-600 text-xl": "bg-yellow-600 border-solid border-4 border-red-900 text-red-900 text-xl"} `}>
            {page}
            </button>)
          }
        </section>

    </section>
  )
}

export default ResidenList