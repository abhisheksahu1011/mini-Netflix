import React,{useState} from 'react'
import Card from './Card'
import { movie_Data } from '../Data'

/* we cant use any of the loop

we can use forEach, filter, reduce */

const Home = () => {
  const [name,setname] = useState("");

  const printing=(e)=>{
    setname(e.target.value);
  }

  return (
  <>
        <div className='d-flex justify-content-center flex-column'>
      
      <input className='w-25 m-auto mt-3'  type="text" onChange={(event)=>{printing(event)}}/>
    
      <div className="container mt-5 cards_container">
  
          {
            movie_Data.map((val,i) => {
              if(((val.name).toLowerCase()).includes((name).toLowerCase()))
              return (
                <Card name={val.name} time={val.time} img={val.img}  desc={val.description} profile={val.profile_img} key={i}/>
               
              )
            })
          }
  
  
  
  
  
  
  
        </div>
  
      </div>
  </>    

  )
}

export default Home