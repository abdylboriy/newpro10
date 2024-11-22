import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Navbar from './navbar'
import ServicesComp from './Services'
import FooterComponent from './footer'
import MotorsComponent from './motors/index'
import CampingComponent from './camping'
import MuiComponent from './Mui'
import HomeComponent from "./Home"
import MultiCarouselComponent from './carousel/index'
import Motordetail from './motors/detail'
import Carvandetail from './caravan/detail'
import BasicTabs from './motors/Tabs'
import CustomTabPanel from './motors/tabs/Tabsinfo'
import CaravanComponent from './caravan/index'
import TuningComponent from './tuning'
import Tuningdetail from './tuning/detail'
import Useddetail from './used/detail'
import UsedComponent from './used'
import Campingdetail from './campingdetail'



const RouterComponent = () => {
    return(


    <>
    <Navbar />        
    <Routes>
        <Route path='/Services' element={<ServicesComp/>}/>
        <Route path='/motor' element={<MotorsComponent/>} />
        <Route path='/' element={<HomeComponent/>}/>
        <Route path='/Tuning' element={<TuningComponent/>}/>
        <Route path='/used' element={<UsedComponent/>}/>
        <Route path='/caravan' element={<CaravanComponent/>}/>
        <Route path='/Camping' element={<CampingComponent/>}/>
        <Route path='/admin' element={<MuiComponent/>}/>
        <Route path='/home' element={<HomeComponent/>}/>
        <Route path='/carousel' element={<MultiCarouselComponent/>}/>
        <Route path='/motordetail/:id' element={<Motordetail/>}/>
        <Route path='/tuningdetail/:id' element={<Tuningdetail/>}/>
        <Route path='/carvandetail/:id' element={<Carvandetail/>}/>
        <Route path='/useddetail/:id' element={<Useddetail/>}/>
        <Route path='/Tabs' element={<BasicTabs/>}/>
        <Route path='/Tab' element={<CustomTabPanel/>}/>
        <Route path='/campingdetail/:id' element= {<Campingdetail/>}/>
    </Routes>
    <FooterComponent/>
    </>


    
    )
  
}

export default RouterComponent;