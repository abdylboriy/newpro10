import React, { useState } from 'react'
import {Sidebar,Sidebarmenu,Sidmid,Sidmenu, Sidebrnav, SidebrnavCenter1, Sidebrnavleft,} from '../doctorStyled'
import {MidCaravan} from './Car'
import Four from '../assest/fourT.svg'
import three from '../assest/threeT.svg'
import HcaravanComponent from './Hmenu'
import VcaravanComponent from './Vmenu'
import Grom from '../assest/grommet.svg'
import SelectSmall from './select'
import {NestedList, NestedList2, NestedList3, NestedList4, NestedList5} from "./List"





const CaravanComponent = () => {
const[active, setActive]= useState(true)
    function handleHmenu(){
        setActive(true)

}
function handVmenu(){
    setActive(false)
}

  return (
    <> 
    <MidCaravan>
    <p>Home / Motors</p>
    <h4>Our ranges</h4>
    <h1>Caravan</h1>
     </MidCaravan>
            <Sidebrnav>

<Sidebrnavleft><p>Item</p>  <h6>25.156</h6></Sidebrnavleft>
<SidebrnavCenter1>
    <p>Sort by</p>
   <button1>
    <p>Select</p>
    <img src={Grom} alt="gr"/>
   </button1>
      <SelectSmall/>
   <button3>
   <button onClick={handleHmenu}> <img src={Four} alt="gr"/></button>
   <button onClick={handVmenu}><img src={three} alt="list"/></button>
   </button3>
   
</SidebrnavCenter1>



</Sidebrnav>
    
    <div style={{display:"flex", justifyContent:"center"}}>
    <Sidebar>
            <Sidebarmenu>
                <Sidmid>
            <button>
            <h1>Cost of car</h1></button>
            <Sidmenu>
            <div>
                <p>from</p>
                <input type="text"/>
            </div>
            <div>
                <p>to</p>
                <input type="text"/>
            </div></Sidmenu>
                </Sidmid>
                <div>
                <NestedList/>
                <NestedList2/>
                <NestedList3/>
                <NestedList4/>
                <NestedList5/>

      
    </div>
            </Sidebarmenu>
        </Sidebar>
        <div>

    {active ? <HcaravanComponent/>: <VcaravanComponent/>}
    </div>
    </div>
    </>
  )
}

export default CaravanComponent;