import React from 'react'
import { useEffect,useState} from 'react';
import {useParams,Link,useNavigate} from 'react-router-dom';


const Movies = () => {
  const navigate=useNavigate();
  const [show,setShow] = useState([]);

  const getdata = async()=>{
    const response = await fetch('https://api.tvmaze.com/search/shows?q=all');
    setShow(await response.json());
    
  }

  useEffect(()=>{
    getdata();
  },[]); 


  return (
    <div className='container-fluid mt-2 text-bg-dark'>
        <div className=' text-center'>
            <div className='flex row justify-content-evenly'>
            {
                show.map((item)=>{
                 return(
                    <div className="card mt-3 text-bg-dark" style={{width: '18rem'}}>
                <img src={item.show.image.medium} className="card-img-top" alt="..."/>
                <div className="card-body" key={item.show}>
                  <h5 className="card-title">{item.show.name}</h5>
                  <div onClick={()=>{
                    <Link to={`/detail/${item.show.id}`}></Link>
                  }}><a className="btn btn-primary">Know more</a></div>
                </div>
                 </div>
                 )
                })
            }
            </div>
        </div>      
    </div>
  )
}

export default Movies
