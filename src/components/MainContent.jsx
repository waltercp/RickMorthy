import React, { useState } from 'react'
import LocationInfo from './LocationInfo'
import ResidenInfo from './ResidenInfo'
import './syles/mainContent.css'
import Pagination from './Pagination'





const MainContent = ({ location }) => {
    const [pagerickMorty, setPagerickMortt] = useState(8)
    const [currentPage, setCurrentPage] = useState(1)


    const lastIndex = currentPage * pagerickMorty
    const firstIndex = lastIndex - pagerickMorty

    return (
        <>
            <LocationInfo location={location} />

            <Pagination
                pagerickMorty={pagerickMorty}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                poblacion={location?.residents.length}
            />


            <div className='resident-container'>
                {
                    location?.residents.map(url => (
                        <ResidenInfo
                            key={url}
                            url={url}
                        />
                    )).slice(firstIndex, lastIndex)
                }

                 
            </div>
          

        </>
    )
}

export default MainContent