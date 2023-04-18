import React from 'react'
import './syles/locationInfo.css'


const LocationInfo = ({ location }) => {



  return (
    <div className='location' >
      <h2 className='location_name' >{location?.name}</h2>
      <ul className='location_list' >
        <li className='location_intem' > <span>Type</span> <span>{location?.type}</span> </li>
        <li className='location_intem' > <span>Dimension:</span><span>{location?.dimension}</span></li>
        <li className='location_intem' > <span>Population:</span><span>{location?.residents.length}</span></li>
      </ul>


    </div>
  )
}

export default LocationInfo