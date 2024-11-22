import React, { useState } from 'react'
import {MidContainer,Sidebar,Sidebarmenu,Sidmid,Sidmenu, Sidebrnav, SidebrnavCenter1, Sidebrnavleft,} from '../doctorStyled'
import Four from '../assest/fourT.svg'
import three from '../assest/threeT.svg'
import HmenuComponent from './Hmenu'
import VmenuComponent from './Vmenu'
import MultipleSelectChip from './Selectlong'
import SelectSmall from './select'
import {NestedList, NestedList2, NestedList3, NestedList4, NestedList5} from "./List"





const MotorsComponent = () => {
const[active, setActive]= useState(true)
    function handleHmenu(){
        setActive(true)

}
function handVmenu(){
    setActive(false)
}

  return (
    <> 
    <MidContainer>
    <p>Home / Motors</p>
    <h4>Our ranges</h4>
    <h1>Motors</h1>
     </MidContainer>
            <Sidebrnav>

<Sidebrnavleft><p>Item</p>  <h6>25.156</h6></Sidebrnavleft>
<SidebrnavCenter1>
    <p>Sort by</p>
   
   <MultipleSelectChip/>
   
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

    {active ? <HmenuComponent/>: <VmenuComponent/>}
    </div>
    </div>
    </>
  )
}

export default MotorsComponent;