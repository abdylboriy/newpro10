import React from 'react'
import {CarHome,CarConteiner, CarButton, Carh1} from '../doctorStyled'
import Star from '../assest/Rectangle 9.svg'
import { Tuningdate } from '../tuningd'
import { Link } from 'react-router-dom'

const HtuningComponent = () => {
    console.log(Tuningdate)
  return (
    <CarHome>
        {Tuningdate.map((value, index)=> {
            return (
                <Link to={`/tuningdetail/${value.id}`}>
                <CarConteiner key={value.id}>
                    <img src={value.photo} alt="" style={{width:"222px", height: '129px'}} />
            <h1>{value.name}</h1>
            <Carh1>
                <p>{value.company}</p>
                <img src={Star} alt="logo"/>
            </Carh1>
            <h2>{value.cost}</h2>
            <CarButton>
                <button><h3>Order</h3></button>
                <button><h3>Compare</h3></button>
            </CarButton>

                </CarConteiner>
                </Link>

            )
        } )}



            
        
        </CarHome>)

}

export default HtuningComponent