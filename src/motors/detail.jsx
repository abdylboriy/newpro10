import React from 'react'
import {CarConteinerH,CarIMg, CarHm, CarContent, CarHeader, 
    CarPrice, CarMid, CarMid1, CarBut1, CarBut2, CarBut,
    PhotoRight, PhotoLeft, PhotoContenier, ButtonMId } from './Car'
import { MidContainer } from '../doctorStyled'
import { useParams } from 'react-router-dom'
import { motordata } from '../mock/motor'
import Photo1 from '../assest/inPhoto/image 6.svg'
import Photo2 from '../assest/inPhoto/image 7.svg'
import Photo3 from '../assest/inPhoto/image 8.svg'
import Photo4 from '../assest/inPhoto/image 9.svg'
import Photo5 from '../assest/inPhoto/image 10.svg'
import FullWidthTabs from './Tabs'

const Motordetail = () => {
  let {id} = useParams()

  const dataById = motordata.find((data)=> data.id === parseInt(id))
    return (
    <>
      <MidContainer>
    <p>{dataById.car.name}</p>
    <CarBut>
    <CarBut1>ADD TO CART</CarBut1>
    <CarBut2>COMPARE</CarBut2>
    </CarBut>
     </MidContainer>
    <CarConteinerH>
        <CarIMg><img src={dataById.car.photo} alt="asd" /></CarIMg>
    <CarHm>
        
        <CarContent>
            <CarHeader>
                <h1>{dataById.car.name}</h1>
                <p>{dataById.car.type}</p>
            </CarHeader>
            <CarPrice>
            <p>{dataById.car.cost}</p>
            </CarPrice></CarContent>
            <CarContent>
            <CarMid>
                <h1>Company</h1>
                <h1>People</h1>
                <h1>License type</h1>
            </CarMid>
            <CarMid1>
                <p>{dataById.car.company}</p>
                <p>{dataById.car.people}</p>
                <p>{dataById.car.license}</p>
            </CarMid1>
            </CarContent>
        
    </CarHm>
    </CarConteinerH>
    <PhotoContenier>
        <PhotoLeft>
            <h1>Comfort</h1>
            <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rutrum nibh urna sagittis arcu natoque lectus cursus felis. Nec, felis risus, id in proin sed proin iaculis mi. Turpis ac ut metus, amet, pulvinar. Eget amet dictum luctus quis molestie tellus vitae.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rutrum nibh urna sagittis arcu natoque lectus cursus felis. Nec, felis risus, id in proin sed proin iaculis mi.</h2>
        </PhotoLeft>
        <PhotoRight>
            <img src={Photo1} alt="asdas" />
        </PhotoRight>
    </PhotoContenier>
    <PhotoContenier>
        <PhotoRight>
            <img src={Photo2} alt="asdas" />
        </PhotoRight>
        <PhotoLeft>
            <h1>Tidying away is child’s play!</h1>
            <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rutrum nibh urna sagittis arcu natoque lectus cursus felis. Nec, felis risus, id in proin sed proin iaculis mi. Turpis ac ut metus, amet, pulvinar. Eget amet dictum luctus quis molestie tellus vitae.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rutrum nibh urna sagittis arcu natoque lectus cursus felis. Nec, felis risus, id in proin sed proin iaculis mi.</h2>
        </PhotoLeft>
        
    </PhotoContenier>
    <PhotoContenier>
        <PhotoLeft>
            <h1>Ventilated , Lit up</h1>
            <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rutrum nibh urna sagittis arcu natoque lectus cursus felis. Nec, felis risus, id in proin sed proin iaculis mi. Turpis ac ut metus, amet, pulvinar. Eget amet dictum luctus quis molestie tellus vitae.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rutrum nibh urna sagittis arcu natoque lectus cursus felis. Nec, felis risus, id in proin sed proin iaculis mi.</h2>
        </PhotoLeft>
        <PhotoRight>
            <img src={Photo3} alt="asdas" />
        </PhotoRight>
    </PhotoContenier>
    <PhotoContenier>
        
        <PhotoRight>
            <img src={Photo4} alt="asdas" />
        </PhotoRight>
        <PhotoLeft>
            <h1>Easy access</h1>
            <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rutrum nibh urna sagittis arcu natoque lectus cursus felis. Nec, felis risus, id in proin sed proin iaculis mi. Turpis ac ut metus, amet, pulvinar. Eget amet dictum luctus quis molestie tellus vitae.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rutrum nibh urna sagittis arcu natoque lectus cursus felis. Nec, felis risus, id in proin sed proin iaculis mi.</h2>
        </PhotoLeft>
    </PhotoContenier>
    <PhotoContenier>
        <PhotoLeft>
            <h1>Heating when driving</h1>
            <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rutrum nibh urna sagittis arcu natoque lectus cursus felis. Nec, felis risus, id in proin sed proin iaculis mi. Turpis ac ut metus, amet, pulvinar. Eget amet dictum luctus quis molestie tellus vitae.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rutrum nibh urna sagittis arcu natoque lectus cursus felis. Nec, felis risus, id in proin sed proin iaculis mi.</h2>
            <ButtonMId>
            <button className='btn1'>ADD TO CART</button>
            <button className='btn2'>COMPARE</button>
            </ButtonMId>
        </PhotoLeft>
        <PhotoRight>
            <img src={Photo5} alt="asdas" />
        </PhotoRight>
    </PhotoContenier>
    <FullWidthTabs/>
    </>
  )
}

export default Motordetail