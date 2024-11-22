import React from 'react'
import { motordata } from '../../mock/motor'
import { TabsConteiner, TabsNavbar, TabsDataleft, TabsdataRight, TabsNavbarright, Tabsdatamid} from './Tabs'


const Tabsinfo = () => {
    console.log(motordata)
  return (
    <TabsConteiner>
        
        <TabsNavbar>
                <h1>Premium Review 35</h1>            
        </TabsNavbar>
        {motordata.map((value, index)=> {
            return (
      
  
            <TabsDataleft key={value.car.id}>
                <img src={value.car.photo} alt="" />
            
            
            <TabsdataRight>
                <h1>{value.car.name}</h1>
                <h2>{value.car.company}</h2>
                <p>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet</p>
                
            </TabsdataRight>
            <Tabsdatamid>
                <h1>ID:{value.car.id}</h1>
                <h1>date:{value.car.date}</h1>
                <h1>Viewed:{value.car.cost}</h1>
            </Tabsdatamid>
              
            </TabsDataleft>
            )
} )}
       
      
    </TabsConteiner>
  )
}

export default Tabsinfo