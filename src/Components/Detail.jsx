import React from 'react'
import { useLocation } from 'react-router-dom';

const Detail = () => {
    
  const location=useLocation();

  return (
    <>
    <div className='d-flex flex-row justify-content-around'>
        <div className='m-5'>
          <img src={location.state.image}/>
        </div>
       <div className='m-5'>
          {location.state.summary}
       </div>
    </div>
    </>
  )
}

export default Detail
