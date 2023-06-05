export const paginationLogic = (currentPage, residents) => { 
    if(!residents){
        return{
            pages:[1],
            residentsPage: []            
        }
    }

  //cantidad de residentes por pagina 
    const RESIDENTS_PER_PAGE= 20

  // cantidad de paginas totales  
    const totalPages = Math.ceil(residents.length / RESIDENTS_PER_PAGE);

  //residentes que van a mostrar en la pagina  
    const sliceStar = (currentPage - 1 ) * RESIDENTS_PER_PAGE;
    const sliceEnd = sliceStar + RESIDENTS_PER_PAGE;
    const residentsPage = residents.slice(sliceStar,sliceEnd);

  //generaion del areaglo de las paginas a mostrar

  const pages = []
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

    return {
        residentsPage,
        pages
    }

 }