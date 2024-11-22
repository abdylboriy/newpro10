import React from 'react'
import {Containerlong, LongConteiner, Qoshimcha , Qoshimcha1, Qoshimcha2, Carinfo, Carprice, CarlongButton} from '../doctorStyled'
import Star from "../assest/Rectangle 9.svg"
import { UsedCarsdate } from '../usedcarmockdate'
import { Link } from 'react-router-dom'

const VusedComponent = () => {
    console.log(UsedCarsdate)
  return (
   <Containerlong> 
    {UsedCarsdate.map((value, index)=> { 
        return ( 
          
        <LongConteiner  key={value.id}> 
        
         <img src={value.photo} alt="logo" />
          
         <Qoshimcha>
         <Link to={`/useddetail/${value.id}`}> 
         <Qoshimcha1>
            <Carinfo> 
                <h1>{value.name}</h1> 
                <p>{value.company}</p> 
            </Carinfo> 

<Qoshimcha2>
<h2>{value.cost}</h2>
            <Carprice> 
            <img src={Star} alt="logo"/> 
            <p>{value.rate}</p> 
            </Carprice> 
            </Qoshimcha2>

            </Qoshimcha1>
             </Link> 

            <CarlongButton> 
                <button>Order</button> 
                <button>Compare</button> 
            </CarlongButton> 
            </Qoshimcha>

        </LongConteiner> 
         
     
       
    ) 
} )} 
    </Containerlong>
    
  )
}

export default VusedComponent