import React from 'react'
import './syles/locationInfo.css'


const LocationInfo = ({ location }) => {



  return (
    <div className='location' >
      <h2 className='location_name' >{location?.name}</h2>
      <ul className='location_list' >
        <li className='location_intem' > <span>Type</span>{location?.type} </li>
        <li className='location_intem' > <span>Dimension:</span>{location?.dimension}</li>
        <li className='location_intem' > <span>Population:</span>{location?.residents.length}</li>
      </ul>


    </div>
  )
}

export default LocationInfo