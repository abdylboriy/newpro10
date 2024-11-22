import React from 'react'
import {Containerlong, LongConteiner, Qoshimcha , Qoshimcha1, Qoshimcha2, Carinfo, Carprice, CarlongButton} from '../doctorStyled'
import Star from "../assest/Rectangle 9.svg"
import { motordata } from '../mock/motor'
import { Link } from 'react-router-dom'

const VmenuComponent = () => {
    console.log(motordata)
  return (
   <Containerlong> 
    {motordata.map((value, index)=> { 
        return ( 
          
        <LongConteiner  key={value.id}> 
        
         <img src={value.car.photo} alt="logo" />
          
         <Qoshimcha>
         <Link to={`/motordetail/${value.id}`}> 
         <Qoshimcha1>
            <Carinfo> 
                <h1>{value.car.name}</h1> 
                <p>{value.car.company}</p> 
            </Carinfo> 

<Qoshimcha2>
<h2>{value.car.cost}</h2>
            <Carprice> 
            <img src={Star} alt="logo"/> 
            <p>{value.car.rate}</p> 
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

export default VmenuComponent