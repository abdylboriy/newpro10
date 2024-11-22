import React from 'react'
import { MidCamping,CampingConteiner, CampingImg } from './doctorStyled'
import {campingPlaces} from './campingdate'
import { Link } from 'react-router-dom'

const CampingComponent = () => {
    
  return (
    <>
    <MidCamping>
<p>Home / Motors</p>
<h1>Camping places</h1>
 </MidCamping>
 <CampingConteiner>
 {campingPlaces.map((value, index)=> {
            return (
              <Link to={`/campingdetail/${value.id}`}>
    <CampingImg>
        <img src={value.photo} alt="camping" />
        <h1>{value.name}</h1>
        <p>{value.location}</p>
    </CampingImg>
    </Link>
  )
} )}
 </CampingConteiner>
    </>
  )
}

export default CampingComponent