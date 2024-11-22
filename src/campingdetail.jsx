import React from 'react'
import {campingPlaces} from './campingdate'
import {CamDeCon, CamDeT, CamDemid, CamDemidCon, CamDeLast} from './doctorStyled'
import { useParams } from 'react-router-dom'
import photo from './assest/inPhoto/image 10.svg'
import photo2 from './assest/inPhoto/image 10.svg'
import photo3 from './assest/inPhoto/image 10.svg'
import photo4 from './assest/inPhoto/image 10.svg'
import photo5 from './assest/inPhoto/image 10.svg'
import loc from './campingDetail/carbon_location.svg'
import clock from './campingDetail/bi_clock.svg'
import phone from './campingDetail/carbon_phone.svg'
import home from './campingDetail/codicon_home.svg'
import map from './campingDetail/image 15.svg'

const Campingdetail = () => {
    let {id} = useParams()

  const dataById = campingPlaces.find((data)=> data.id === parseInt(id))
  return (
    <CamDeCon>
    <CamDeT>
        <img src={photo} alt="asda" /><img src={photo2} alt="asda" /><img src={photo3} alt="das" /><img src={photo} alt="sda" /><img src={photo4} alt="das" /><img src={photo5} alt="" />
    </CamDeT>
    <CamDemid>
        <h1>{dataById.name}</h1>
        <p>{dataById.location}</p>
    </CamDemid>
    <CamDemidCon>
        <div>
            <img src={loc} alt="sadas" />
            <h1>
            Korea, Seul
            </h1>
        </div>
        <div>
        <img src={clock} alt="sadas" />
        <h1>from 11:00 to 19:00</h1>
        </div>
        <div>
            <img src={phone} alt="dsaas" />
            <h1>005- 862 -8569</h1>
        </div>
        <div>
            <img src={home} alt="dsa" />
            <h1>logo.com</h1>
        </div>
    </CamDemidCon>
    <CamDeLast>
        <h1>Description</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien senectus feugiat in vitae consequat libero placerat nascetur ultrices. Aenean mattis sapien a donec urna, 
bibendum. Maecenas mattis phasellus nunc sed a fringilla risus. Aenean sed fusce pretium sit venenatis bibendum convallis commodo enim.Lorem ipsum dolor sit amet, 
consectetur adipiscing elit. Sapien senectus feugiat in vitae consequat libero placerat nascetur ultrices. Aenean mattis sapien a donec urna, 
bibendum. Maecenas mattis phasellus nunc sed a fringilla risus. Aenean sed fusce pretium sit venenatis bibendum convallis commodo enim.</p>
        <img src={map} alt="sdaas" />
    </CamDeLast>
    

    </CamDeCon>
    
  )
}

export default Campingdetail