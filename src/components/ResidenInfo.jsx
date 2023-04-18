import React from 'react'
import useFetch from '../hooks/useFetch'
import './syles/residentInfo.css'
import Loading from './Loading'






const ResidenInfo = ({ url }) => {

    const [resident] = useFetch(url)




    console.log(resident)



    return (
        <article className='resident'>
            {
                resident
                    ? <>
                        <header className='resident_header'>
                            <img className='resident_img' src={resident?.image} alt="" />
                            <div className='resident_status'>
                                <div className={`resident_status-circle ${resident?.status}`}></div>
                                <span className='resident_status-label'>{resident?.status}</span>
                            </div>
                        </header>
                        <section className='resident_body'>
                            <h3 className='resident_name'>{resident?.name}</h3>
                            <hr className='resident_hr' />
                            <ul className='resident_list'>
                                <li className='resident_item'> <span>species </span>  <span>{resident?.species}</span> </li>
                                <li className='resident_item'> <span>Origin</span>  <span>{resident?.origin.name}</span> </li>
                                <li className='resident_item'> <span>Eppisodes where appear</span>  <span>{resident?.episode.length}</span> </li>
                            </ul>
                        </section>
                    </>
                    :Loading
            }



        </article>


    )
}

export default ResidenInfo