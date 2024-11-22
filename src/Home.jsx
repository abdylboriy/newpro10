import * as React from 'react';
import {ModalConteiner, CenterCon, CamperBlog, CamperBlogleft, CamperBlogright } from './doctorStyled'
import { Carousel } from 'react-responsive-carousel'
import Photo from "./assest/camper/Rectangle 2 (2).svg"
import Photo1 from "./assest/camper/Rectangle 2 (1).svg"
import Photo2 from "./assest/camper/Rectangle 2.svg"
import {BasicModal, BasicModal2, BasicModal3, BasicModal4, BasicModal5, BasicModal6, BasicModal7, BasicModal8 } from './Mui/modal'
import MultiCarouselComponent from './carousel/index'
import camphoto from "./assest/camper/cam1.svg"
import camphoto2 from "./assest/camper/cam2.svg"
import camphoto3 from "./assest/camper/cam3.svg"
import camphoto4 from "./assest/camper/cam4.svg"
import camphoto6 from "./assest/camper/cam6.svg"
import camphoto5 from "./assest/camper/cam5.svg"
// import camphoto8 from "./assest/camper/Rectangle 17 (1).svg"

// const style = {
//     position: 'absolute',
//     top: '50%',
//     left: '50%',
//     transform: 'translate(-50%, -50%)',
//     width: 400,
//     bgcolor: 'background.paper',
//     border: '2px solid #000',
//     boxShadow: 24,
//     p: 4,
//   };

 

const HomeComponent = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
    <>
    <Carousel>
    <div>
        <img src={Photo} alt='bir narsa' />
        
    </div>
    <div>
        <img src={Photo1} alt='bir narsa'  />
        
    </div>
    <div>
        <img src={Photo2} alt='bir narsa'  />
        
    </div>
    
    
    
</Carousel>
<MultiCarouselComponent/>
<div style={{display: 'flex', flexDirection: 'column', width: '100%', justifyContent: 'center', padding:"4%"}}>
<CenterCon><h1>Videos</h1></CenterCon>
<ModalConteiner>
<BasicModal/>
<BasicModal2/>
<BasicModal3/>
<BasicModal4/>
<BasicModal5/>
<BasicModal6/>
<BasicModal7/>
<BasicModal8/>
    </ModalConteiner>
    <CenterCon><h1>Blogs</h1></CenterCon>
    <CamperBlog>
      <CamperBlogleft>
        <h1>Camper</h1>
        <h2>@camper_1</h2>
        <p>Camping truly is for everyone, from your oldest family member to little campers just trekking out for the first time. Whether your plan is to relax, explore or reconnect, CAMPER campgrounds are a great place to create memories with those you love.</p>
      </CamperBlogleft>
      <CamperBlogright>
        <img src={camphoto} alt="adasd" />
        <img src={camphoto2} alt="adasd" />
        <img src={camphoto3} alt="adasd" />
        <img src={camphoto4} alt="adasd" />
        <img src={camphoto5} alt="adasd" />
        <img src={camphoto6} alt="adasd" />
      </CamperBlogright>
    </CamperBlog>
    </div>

</>

  )
}

export default HomeComponent
  
