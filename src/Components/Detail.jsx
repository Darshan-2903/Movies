import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';

const Detail = () => {
    
    const [show,setShow]=useState();
    const {id} = useParams()
    const getdata = async()=>{
        const response = await fetch('https://api.tvmaze.com/search/shows?q=all');
        setShow(await response.json());
        console.log(show);
      }

    useEffect(()=>{
        getdata();
      },[]); 


  return (
    <>
    <div className='d-flex flex-row justify-content-around'>
        {
            // // if(id==item.show.id) {
            //     show.map((item)=>{
            //   return(
            //     <div className='h-5 m-5'>
            //     <img src={item.show.image.medium}/>
            //   </div>
            //   )
            // })
        
        }
       <div className='m-5'>
          <p></p>
       </div>
    </div>
    </>
  )
}

export default Detail
