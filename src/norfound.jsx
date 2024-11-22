import React from 'react'
import {Container, 
    Midbar, 
    MidCon, 
    MidTuning, 
    Sidebar, 
    Sidebarmenu, 
    Sidmid, 
    Sidmenu,  
    Sidbtn, 
    Midnavbar, 
    Midright, 
    Midmid, 
    Midleft,
    CarConteiner,
    Imgcar1,
    Carh1,
    CarButton,
    CarHome,
    } from './doctorStyled'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Down from './assest/downstr.svg'
import Four from './assest/fourT.svg'
import Three from './assest/threeT.svg'
import car1 from './assest/car1.svg'
import Star from './assest/star.svg'
;

const Norfoundcomp = () => {
  return (
    <>
    <MidTuning>
<p>Home / Motors</p>
<h4>Our ranges</h4>
<h1>Motors</h1>
 </MidTuning>
    <Container>
        <MidCon>
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
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          Brand
        </AccordionSummary>
        <AccordionDetails>
        <label><input type="checkbox" name="" id=""/> Aidal</label>
        <label><input type="checkbox" name="" id=""/>Krial</label>
        <label><input type="checkbox" name="" id=""/>escape</label>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
        Company
        </AccordionSummary>
        <AccordionDetails>
        <label><input type="checkbox" name="" id=""/>escape</label>
        <label><input type="checkbox" name="" id=""/>Aidal</label>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
        License type
        </AccordionSummary>
        <AccordionDetails>
        <label><input type="checkbox" name="" id=""/>1 year</label>
        <label><input type="checkbox" name="" id=""/>2 years</label>
        <label><input type="checkbox" name="" id=""/>1.5year</label>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
        Number of travelers
        </AccordionSummary>
        <AccordionDetails>
        <label><input type="checkbox" name="" id=""/>2</label>
        <label><input type="checkbox" name="" id=""/>3-4</label>
        <label><input type="checkbox" name="" id=""/>5+</label>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
        Location
        </AccordionSummary>
        <AccordionDetails>
        <label><input type="checkbox" name="" id=""/>Seoul</label>
        <label><input type="checkbox" name="" id=""/>Korea</label>
        <label><input type="checkbox" name="" id=""/>Pusan</label>
        </AccordionDetails>
        <Sidbtn>
                <button1>Cancel</button1>
                <button2>Search</button2>
        </Sidbtn>
      </Accordion>
    </div>
            </Sidebarmenu>
        
        </Sidebar>
        
        <Midbar>
            <Midnavbar>
            <Midright><h1>Item  25.156</h1>
                <p>Sort by</p></Midright>
                <Midmid>
                <input type="text" placeholder="select"/>
                <img src={Down} alt="gr"/>
            
            <Midleft>
                <button1><p>60</p>
                <img src={Down} alt="gr"/></button1>
                <button2><img src={Four} alt="clarity"/>
                <img src={Three} alt="list"/></button2>
            </Midleft>
            </Midmid>
            </Midnavbar>
            <CarHome>

            <CarConteiner>
                   <Imgcar1><img src={car1} alt="logo" /></Imgcar1>
            <h1>Name of the car</h1>
            <Carh1>
                <p>Brand name</p>
                <img src={Star} alt="logo"/>
            </Carh1>
            <h2>250 $</h2>
            <CarButton>
                <button><h3>Order</h3></button>
                <button><h3>Compare</h3></button>
            </CarButton>
        </CarConteiner>
        <CarConteiner>
                   <Imgcar1><img src={car1} alt="logo" /></Imgcar1>
            <h1>Name of the car</h1>
            <Carh1>
                <p>Brand name</p>
                <img src={Star} alt="logo"/>
            </Carh1>
            <h2>250 $</h2>
            <CarButton>
                <button><h3>Order</h3></button>
                <button><h3>Compare</h3></button>
            </CarButton>
        </CarConteiner>
        <CarConteiner>
                   <Imgcar1><img src={car1} alt="logo" /></Imgcar1>
            <h1>Name of the car</h1>
            <Carh1>
                <p>Brand name</p>
                <img src={Star} alt="logo"/>
            </Carh1>
            <h2>250 $</h2>
            <CarButton>
                <button><h3>Order</h3></button>
                <button><h3>Compare</h3></button>
            </CarButton>
        </CarConteiner>
        <CarConteiner>
                   <Imgcar1><img src={car1} alt="logo" /></Imgcar1>
            <h1>Name of the car</h1>
            <Carh1>
                <p>Brand name</p>
                <img src={Star} alt="logo"/>
            </Carh1>
            <h2>250 $</h2>
            <CarButton>
                <button><h3>Order</h3></button>
                <button><h3>Compare</h3></button>
            </CarButton>
        </CarConteiner>
        <CarConteiner>
                   <Imgcar1><img src={car1} alt="logo" /></Imgcar1>
            <h1>Name of the car</h1>
            <Carh1>
                <p>Brand name</p>
                <img src={Star} alt="logo"/>
            </Carh1>
            <h2>250 $</h2>
            <CarButton>
                <button><h3>Order</h3></button>
                <button><h3>Compare</h3></button>
            </CarButton>
        </CarConteiner>
        <CarConteiner>
                   <Imgcar1><img src={car1} alt="logo" /></Imgcar1>
            <h1>Name of the car</h1>
            <Carh1>
                <p>Brand name</p>
                <img src={Star} alt="logo"/>
            </Carh1>
            <h2>250 $</h2>
            <CarButton>
                <button><h3>Order</h3></button>
                <button><h3>Compare</h3></button>
            </CarButton>
        </CarConteiner>
        <CarConteiner>
                   <Imgcar1><img src={car1} alt="logo" /></Imgcar1>
            <h1>Name of the car</h1>
            <Carh1>
                <p>Brand name</p>
                <img src={Star} alt="logo"/>
            </Carh1>
            <h2>250 $</h2>
            <CarButton>
                <button><h3>Order</h3></button>
                <button><h3>Compare</h3></button>
            </CarButton>
        </CarConteiner>
        <CarConteiner>
                   <Imgcar1><img src={car1} alt="logo" /></Imgcar1>
            <h1>Name of the car</h1>
            <Carh1>
                <p>Brand name</p>
                <img src={Star} alt="logo"/>
            </Carh1>
            <h2>250 $</h2>
            <CarButton>
                <button><h3>Order</h3></button>
                <button><h3>Compare</h3></button>
            </CarButton>
        </CarConteiner>
        <CarConteiner>
                   <Imgcar1><img src={car1} alt="logo" /></Imgcar1>
            <h1>Name of the car</h1>
            <Carh1>
                <p>Brand name</p>
                <img src={Star} alt="logo"/>
            </Carh1>
            <h2>250 $</h2>
            <CarButton>
                <button><h3>Order</h3></button>
                <button><h3>Compare</h3></button>
            </CarButton>
        </CarConteiner>
        <CarConteiner>
                   <Imgcar1><img src={car1} alt="logo" /></Imgcar1>
            <h1>Name of the car</h1>
            <Carh1>
                <p>Brand name</p>
                <img src={Star} alt="logo"/>
            </Carh1>
            <h2>250 $</h2>
            <CarButton>
                <button><h3>Order</h3></button>
                <button><h3>Compare</h3></button>
            </CarButton>
        </CarConteiner>
        <CarConteiner>
                   <Imgcar1><img src={car1} alt="logo" /></Imgcar1>
            <h1>Name of the car</h1>
            <Carh1>
                <p>Brand name</p>
                <img src={Star} alt="logo"/>
            </Carh1>
            <h2>250 $</h2>
            <CarButton>
                <button><h3>Order</h3></button>
                <button><h3>Compare</h3></button>
            </CarButton>
        </CarConteiner>
        <CarConteiner>
                   <Imgcar1><img src={car1} alt="logo" /></Imgcar1>
            <h1>Name of the car</h1>
            <Carh1>
                <p>Brand name</p>
                <img src={Star} alt="logo"/>
            </Carh1>
            <h2>250 $</h2>
            <CarButton>
                <button><h3>Order</h3></button>
                <button><h3>Compare</h3></button>
            </CarButton>
        </CarConteiner>
        <CarConteiner>
                   <Imgcar1><img src={car1} alt="logo" /></Imgcar1>
            <h1>Name of the car</h1>
            <Carh1>
                <p>Brand name</p>
                <img src={Star} alt="logo"/>
            </Carh1>
            <h2>250 $</h2>
            <CarButton>
                <button><h3>Order</h3></button>
                <button><h3>Compare</h3></button>
            </CarButton>
        </CarConteiner>
        <CarConteiner>
                   <Imgcar1><img src={car1} alt="logo" /></Imgcar1>
            <h1>Name of the car</h1>
            <Carh1>
                <p>Brand name</p>
                <img src={Star} alt="logo"/>
            </Carh1>
            <h2>250 $</h2>
            <CarButton>
                <button><h3>Order</h3></button>
                <button><h3>Compare</h3></button>
            </CarButton>
        </CarConteiner>
        <CarConteiner>
                   <Imgcar1><img src={car1} alt="logo" /></Imgcar1>
            <h1>Name of the car</h1>
            <Carh1>
                <p>Brand name</p>
                <img src={Star} alt="logo"/>
            </Carh1>
            <h2>250 $</h2>
            <CarButton>
                <button><h3>Order</h3></button>
                <button><h3>Compare</h3></button>
            </CarButton>
        </CarConteiner>
        <CarConteiner>
                   <Imgcar1><img src={car1} alt="logo" /></Imgcar1>
            <h1>Name of the car</h1>
            <Carh1>
                <p>Brand name</p>
                <img src={Star} alt="logo"/>
            </Carh1>
            <h2>250 $</h2>
            <CarButton>
                <button><h3>Order</h3></button>
                <button><h3>Compare</h3></button>
            </CarButton>
        </CarConteiner>
        <CarConteiner>
                   <Imgcar1><img src={car1} alt="logo" /></Imgcar1>
            <h1>Name of the car</h1>
            <Carh1>
                <p>Brand name</p>
                <img src={Star} alt="logo"/>
            </Carh1>
            <h2>250 $</h2>
            <CarButton>
                <button><h3>Order</h3></button>
                <button><h3>Compare</h3></button>
            </CarButton>
        </CarConteiner>
        <CarConteiner>
                   <Imgcar1><img src={car1} alt="logo" /></Imgcar1>
            <h1>Name of the car</h1>
            <Carh1>
                <p>Brand name</p>
                <img src={Star} alt="logo"/>
            </Carh1>
            <h2>250 $</h2>
            <CarButton>
                <button><h3>Order</h3></button>
                <button><h3>Compare</h3></button>
            </CarButton>
        </CarConteiner>
        <CarConteiner>
                   <Imgcar1><img src={car1} alt="logo" /></Imgcar1>
            <h1>Name of the car</h1>
            <Carh1>
                <p>Brand name</p>
                <img src={Star} alt="logo"/>
            </Carh1>
            <h2>250 $</h2>
            <CarButton>
                <button><h3>Order</h3></button>
                <button><h3>Compare</h3></button>
            </CarButton>
        </CarConteiner>
        <CarConteiner>
                   <Imgcar1><img src={car1} alt="logo" /></Imgcar1>
            <h1>Name of the car</h1>
            <Carh1>
                <p>Brand name</p>
                <img src={Star} alt="logo"/>
            </Carh1>
            <h2>250 $</h2>
            <CarButton>
                <button><h3>Order</h3></button>
                <button><h3>Compare</h3></button>
            </CarButton>
        </CarConteiner>
        
        </CarHome>
        </Midbar>
        </MidCon>
    </Container>
    </>

  )
}

export default Norfoundcomp