import React from 'react'
import {CarHome,CarConteiner, CarButton, Carh1} from '../doctorStyled'
import Star from '../assest/Rectangle 9.svg'
import { motordata } from '../mock/motor'
import { Link } from 'react-router-dom'

const HmenuComponent = () => {
    console.log(motordata)
  return (
    <CarHome>
        {motordata.map((value, index)=> {
            return (
                <Link to={`/motordetail/${value.id}`}>
                <CarConteiner key={value.id}>
                    <img src={value.car.photo} alt="" />
            <h1>{value.car.name}</h1>
            <Carh1>
                <p>{value.car.company}</p>
                <img src={Star} alt="logo"/>
            </Carh1>
            <h2>{value.car.cost}</h2>
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

export default HmenuComponent