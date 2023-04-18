import React from 'react'
import './syles/loading.css'


const Loading = () => {
  return (
    <div className='componentLoading'>
      <section className='loading_body'>
        <h3 className='loading_name'>Loading....</h3>
        <hr className='loading_hr' />
        <ul className='loading_list'></ul>
      </section>
    </div>
  )
}

export default Loading