import styled from "styled-components";
import Sentr from './assest/logo1.svg'
import Camping from './assest/9c88c08ba24f4f3589d98974c274c82a.jpg'
import Tuning from "./assest/camping-car-tuning-4.jpg"

 export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
height: 100%;
`
export const MidContainer = styled.div`
width: 100%;
height: 350px;
background-image: url(${Sentr});
background-size: cover;
background-position:center;
display: flex;
flex-direction:column;
align-items:center;
justify-content:center;


p{color: #FFF;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: normal;

}
h4 {color: #FFF;
font-size: 27px;
font-style: normal;
font-weight: 700;
line-height: normal;

}
h1 {color: #FFF;       
font-size: 80px;
font-style: normal;
font-weight: 700;
line-height: normal;

}
`
export const MidTuning = styled.div`
width: 100%;
height: 350px;
background-image: url(${Tuning});
background-size: cover;
background-position:center;
display: flex;
flex-direction:column;
align-items:center;
justify-content:center;


p{color: #FFF;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: normal;

}
h4 {color: #FFF;
font-size: 27px;
font-style: normal;
font-weight: 700;
line-height: normal;

}
h1 {color: #FFF;       
font-size: 80px;
font-style: normal;
font-weight: 700;
line-height: normal;

}
`
export const MidCamping = styled.div`
width: 100%;
height: 350px;
background-image: url(${Camping});
background-size: cover;
background-position:center;
display: flex;
flex-direction:column;
align-items:center;
justify-content:center;
padding: 20px 20px;

p{color: #FFF;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: normal;

}

h1 {color: #FFF;       
font-size: 80px;
font-style: normal;
font-weight: 700;
line-height: normal;

}
`


export const Button = styled.button`
background-color: blue;
color: white;
font-weight: 600px;
padding: 20px;
`
export const Midmenu = styled.img`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
 
    `
    export const MidCon = styled.div`
        display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    gap: 3.5%;
    margin-top: 60px;
    
    `
    export const Sidebar = styled.div`
    width: 17.79%;
    display: flex;
    flex-direction: column;
    height: 1179.762px;
    @media only screen and (max-width: 1200px) {
    display: none;
};

@media only screen and (max-width: 800px) {
    display: none;
    
};
    `
    export const Sidebarmenu = styled.div`
    display: flex;
    flex-direction: column;
    height: 1179.762px;
    margin-top: 5px;
    
    `
    export const Sidmid = styled.div`
    display: flex;
    flex-direction: column;
    height: 155px;
    margin-bottom: 50px;
    button{
        display: flex;
    height: 36px;
    width: 100%;
    background-color: white;
    border: none;
    border-bottom: solid 1px rgb(81, 79, 79);
    }
    h1{
        color: #000;
        font-size: 18px;
        font-style: normal;
        font-weight: 600;
        line-height: 100%;
    }
    `
    export const Sidmenu = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    input{
    width: 91px;
    height: 36px;
    flex-shrink: 0;
    border-radius: 10px;
    border: 1px solid rgba(55, 55, 55, 0.60);
    }
    
    `
    export const Sidwpaper = styled.div`
    width: 100%;
    height: 159px;
    
    button {width:100%;
        height:33px;
        display:flex;
        justify-content:space-between;
        border: none;
        border-bottom: solid 1px rgba(55, 55, 55, 0.30);
        background-color: white;
        
    }
    h1{color: #000;
    font-family: Montserrat;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: 100%; /* 18px */
    
    }
    label {display: flex;
    align-items:center;
    gap: 10px;

}
input {width: 22px;
height: 22px;
flex-shrink: 0;
border-radius: 5px;
border: 1px solid #666;
background: #FFF;

};
p{color: var(--text, #373737);
font-family: Montserrat;
font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: 100%; /* 14px */

};
    `
    export const Sidbtn = styled.div`
    display:flex;
    height: 100%;
    width: 100%;
    gap: 8.2px;
    
    
    
    button1 {width: 115.804px;
    height: 38.968px;
    flex-shrink: 0;
    border-radius: 60px;
    background: var(--sariq, #FF7A00);
    display: flex;
    justify-content:center;
    align-items:center;
    /* btn sh */
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.10);
    color: #FFF;
    font-family: "Open Sans";
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    }
    button2 {width: 115.804px;
    height: 38.968px;
    flex-shrink: 0;
    border-radius: 60px;
    background: var(--blue, #006DAB);
    display: flex;
    justify-content:center;
    align-items:center;
    /* btn sh */
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.10);
    color: #FFF;
    font-family: "Open Sans";
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    
    
    };
    
    `
    export const Sidebrnav = styled.div`
    width: 100%;
    height: 36px;
    display:flex;
    gap:45%;
    
    `
    export const Sidebrnavleft = styled.div`
    display:flex;
    gap:20%;
    padding-left: 50px;
    p {color: var(--text, #373737);
    font-family: Montserrat;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: 100%; /* 18px */
    
    }
    h6 {color: var(--blue, #006DAB);
    font-family: Montserrat;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: 100%;
    
    }
    
    `
    export const SidebrnavCenter1 = styled.div`
    width: 100%;
    height: 36px;
    
    display: flex;
    align-items:center;
    gap: 3%;
    p {color: var(--text, #373737);
    font-family: Montserrat;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: 100%;}
    button1 {width:45%;
    height: 30px;
    flex-shrink: 0;
    border-radius: 5px;
    border: 1px solid rgba(55, 55, 55, 0.30);
    display: flex;
    align-items: center;
    justify-content:space-between;
    
    p {color: rgba(55, 55, 55, 0.60);
    font-family: Montserrat;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 100%; /* 14px */
    padding-left:5%;
    
    }
    img{width: 30px;
    height: 30px;
    border: solid 0.5px  rgba(55, 55, 55, 0.60);
    
    }
    
    }
    button {
        img{width:100%;
        height:100%}
    }
    button2 {
        width: 17.36%;
    height: 30px;
    border-radius: 5px;
    border: 1px solid rgba(55, 55, 55, 0.30);
    display:flex;
    align-items: center;
    justify-content:space-between;
    
    p {color: rgba(55, 55, 55, 0.60);
    font-family: Montserrat;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 100%; /* 14px */
    padding-left:5%;
    
    }
    img{width: 50%;
        height: 30px;
    border: solid 0.5px  rgba(55, 55, 55, 0.60);
    }
    }
    button3 {    width: 9.36%;
    height: 30px;
    border-radius: 5px;
    border: 1px solid rgba(55, 55, 55, 0.30);
    display:flex;
    align-items: center;
    
    
    img {width:100%;
    height:100%;
    flex-shrink: 0;
    border: 1px solid rgba(55, 55, 55, 0.30);
    }
    
    }
    
    `
    export const Carcon = styled.div`
        display: grid;
    grid-template-areas: "a a a a";
    gap: 20px;
    `
    export const Midbar = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 70.2%;
    `
    export const Midnavbar = styled.div`
        display: flex;
    width: 100%;
    height: 36px;
    border-bottom: solid 1px black;
    
    `
    export const Midright = styled.div`
    display: flex;
    width: 55%;
    height: 100%;
    gap: 72%;
h1{color: var(--text, #373737);
    font-family: Montserrat;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: 100%; /* 18px */color: var(--blue, #006DAB);
    font-family: Montserrat;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: 100%;

}
p{color: var(--text, #373737);
    font-family: Montserrat;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 100%; /* 16px */

}
    `
    export const Midmid = styled.div`
    display: flex;
    height: 100%;
    width: 45%;
    `
    export const Midleft = styled.div`
    width: 100%;
height: 36px;

display: flex;
align-items:center;
gap: 3%;
    button1 {
    width: 17.36%;
height: 30px;
border-radius: 5px;
border: 1px solid rgba(55, 55, 55, 0.30);
display:flex;
align-items: center;
justify-content:space-between;
    }

p {color: rgba(55, 55, 55, 0.60);
font-family: Montserrat;
font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: 100%; /* 14px */
padding-left:5%;

}
img{width: 50%;
    height: 30px;
border: solid 0.5px  rgba(55, 55, 55, 0.60);
}
button2 {    width: 9.36%;
height: 30px;
border-radius: 5px;
border: 1px solid rgba(55, 55, 55, 0.30);
display:flex;
align-items: center;

}
img {width:100%;
height:100%;
flex-shrink: 0;
border: 1px solid rgba(55, 55, 55, 0.30);
}


    `
    export const CarHome = styled.div`
    width: 100%;
height: 100%;
margin-top:40px;
display: grid;
gap: 20px;
grid-template-areas: "a a a a";
padding: 20px 10px;
@media only screen and (max-width: 1200px) {
    display: grid;
    gap: 20px;
    grid-template-areas: "a a";
    height: 100%;
};

@media only screen and (max-width: 800px) {
    display: grid;
    gap: 20px;
    grid-template-areas: "a";
    height: 100%;
};
    `


    export const CarConteiner = styled.div`width: 100%;
    height: 307px;
    border-radius: 10px;
    background: #FFF;
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.10);
    display: flex;
    flex: 1;
    flex-direction: column;
    padding-left: 7px;
    padding-bottom: 10px;
    h1 {color: var(--text, #373737);
        font-family: Montserrat;
        font-size: 16px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
    margin-top: 1.57px;}
    h2 {color: var(--blue, #006DAB);
        font-family: Montserrat;
        font-size: 22px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
    margin-top: 18px;
    }`
    export const Imgcar1 = styled.div `
    img {  width: 97%;
        height: 137.433px;
        border-radius: 20px;
    }
    `
    export const Carh1 = styled.div`display: flex;
    flex: 1;
    gap: 49%;
    margin-top: 5px;
    p {color: var(--text, #373737);
        font-family: Montserrat;
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    
    }
    img {width: 34px;
        height: 15px;
    }
    
    
    `
    export const CarButton = styled.div`
    display: flex;
    margin-top: 13px;
    gap: 28px;
    button {width: 41.15%;
        height: 35px;
        border-radius: 10px;
    border: 1px solid var(--blue, #006DAB);
    background-color: white;
    }
    h3 {color: var(--blue, #006DAB);
        font-family: Montserrat;
        font-size: 14px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;}
    `
    export const Footer = styled.div`
    width: 100%;
    height: 350px;
    background: var(--blue, #006DAB);
    display: grid;
    align-items: center;
    grid-template-areas:"1 1 1 1";
    padding: 4%;
    
    h1 {color: #FFF;
    font-family: Montserrat;
    font-size: 40px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin-bottom:150px;}
    
    
    `
    
    export const Footernav = styled.div `
    display:flex;
    flex-direction: column;
    gap: 9px;
    h3 {color: #FFF;
    font-family: Montserrat;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin-bottom:40px;
    
    }
    p {color: #FFF;
    font-family: Montserrat;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    
    
    }
    
    `
    export const Footerimg = styled.div`
    display : flex;
    align-items: center;
    
    
    img {width: 25.429px;
    height: 25.429px;
    flex-shrink: 0;
    
    
    }
       
    `
 export const Containerlong = styled.div` 
 display: flex;
 flex-direction:column;
 height: 100%;
 width: 100%;
 margin-top:37px;
 gap:20px;
  
   ` 
   export const LongConteiner = styled.div` 
 display: flex;
 width:100%;
 justify-content:center;
 align-items:center;
 gap: 30px;
 height: 180px;
 flex-shrink: 0;
 border-radius: 20px;
 background: #FFF;
 box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.10);
 
 img{
     width: 280px;
 height: 143.853px;
 flex-shrink: 0;
 }
    
   ` 
   export const ImgcarLong = styled.div` 
   width: 280px; 
 height: 143.853px; 
 flex-shrink: 0; 
 margin-right:20px; 
 display: flex; 
 img{ 
     width: 100%; 
     height: auto; 
     border-radius: 5px; 
 } 
 ` 
  
 export const Carprice = styled.div` 
 display:flex;
  
 ` 
 export const Carinfo = styled.div` 
 
 display:flex; 
 flex-direction:column;
 h1 {color: var(--text, #373737);
 font-family: Montserrat;
 font-size: 18px;
 font-style: normal;
 font-weight: 600;
 line-height: normal;}
 p {color: var(--text, #373737);
 font-family: Montserrat;
 font-size: 12px;
 font-style: normal;
 font-weight: 400;
 line-height: normal;
 
 }
 ` 
 export const CarlongButton = styled.div` 
 
 display: flex;
 gap: 14px;
 button { width: 50%;
 height: 35px;
 flex-shrink: 0;
 border-radius: 10px;
 border: 1px solid var(--blue, #006DAB);
 
 /* btn sh */
 box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.10);
 color: var(--blue, #006DAB);
 font-family: Montserrat;
 font-size: 14px;
 font-style: normal;
 font-weight: 700;
 line-height: normal;
 
 }
 `
 export const Qoshimcha = styled.div`
 display: flex;
 flex-direction:column;
 width:100%;
 padding:30px;
 gap: 45px;
 
 `
 export const Qoshimcha1 = styled.div`
 display: flex;
 justify-content:space-between;`
 
 export const Qoshimcha2 = styled.div`
 display: flex;
 flex-direction: column;
 align-items: end;
 h1 {color: var(--text, #373737);
 font-family: Montserrat;
 font-size: 18px;
 font-style: normal;
 font-weight: 600;
 line-height: normal;}
 p {color: var(--text, #373737);
 font-family: Montserrat;
 font-size: 12px;
 font-style: normal;
 font-weight: 400;
 line-height: normal;
 
 }
 h2{color: var(--blue, #006DAB);
 font-family: Montserrat;
 font-size: 22px;
 font-style: normal;
 font-weight: 700;
 line-height: normal;
 
 }
 img{width: 33px;
 height: 15px;
 flex-shrink: 0;}
 
 `
export const CampingConteiner = styled.div`
display: grid;
grid-template-areas: "a a a";
width: 100%;
height: 100%;
gap: 20px;
margin-top: 20px;
padding: 20px;
`
export const CampingImg = styled.div`
display: flex;
flex-direction: column;
width: 100%;
height: 100%;
justify-content: center;
align-items: flex-start;
gap: 20px;
flex-shrink: 0;
padding-left: 7px;
padding-bottom: 10px;
img{
    width: 395px;
height: 300px;
flex-shrink: 0;
border-radius: 10px;
}
h1{
    color: var(--text, #373737);

font-size: 22px;
font-style: normal;
font-weight: 600;
line-height: normal;
}
p{
    color: var(--text, #373737);

font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: normal;
}
`
export const ModalConteiner = styled.div`
display: grid;
grid-template-areas: "a a a a";
gap: 10px;
justify-content: center;
align-items: center;
`
export const CenterCon = styled.div`
display: flex;
justify-content: center;
align-items: center;
padding: 20px 20px;
width: 100%;
height: 100%;
h1{
    color: var(--text, #373737);
font-family: Gilroy;
font-size: 28px;
font-style: normal;
font-weight: 700;
line-height: normal;
}
`
export const CamDeCon= styled.div`
display: flex;
flex-direction: column;
width: 100%;
height: 100%;
align-items: center;
justify-content: center;
/* max-width: 1366px; */
/* height: 1595px; */
border: 1px solid black;
`
export const CamDeT= styled.div`
display: flex;
gap: 20px;
/* align-items: center;
justify-content: center;
padding: 20px 20px; */
img{
    width: 195px;
height: 147px;
flex-shrink: 0;
border-radius: 10px;
background: linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), url(<path-to-image>) lightgray 50% / cover no-repeat;
}
`
export const CamDemid= styled.div`
display: flex;
flex-direction: column;
padding-left: 20px;
padding-bottom: 20px;
width: 100%;
/* height: 100%; */
/* justify-content: center; */
align-items: start;
h1{
    color: #000;
font-family: Montserrat;
font-size: 25px;
font-style: normal;
font-weight: 600;
line-height: normal;
}
p{
    color: var(--blue, #006DAB);
font-family: Montserrat;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: normal;
}

`
export const CamDemidCon= styled.div`
display: grid;
grid-template-areas: "a a";
align-items: center;
padding: 20px 20px;
width: 100%;
height: 100%;

img{
    width: 20px;
height: 20px;
flex-shrink: 0;
}
h1{
    color: var(--text, #373737);
font-family: Montserrat;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: normal;
}

`
export const CamDeLast= styled.div`
display: flex;
flex-direction: column;
/* align-items: center; */
width: 100%;
height: 100%;
padding: 20px 20px;
gap: 10px;

h1{
    color: var(--blue, #006DAB);
font-family: Montserrat;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: normal;
}
p{
    justify-content: center;
    align-items: center;
    color: var(--text, #373737);
font-family: Montserrat;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: normal;
}
img{
    width: 1226px;
height: 552px;
flex-shrink: 0;
background: linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), url(<path-to-image>) lightgray 50% / cover no-repeat;
}

`
export const CamperBlog = styled.div`
display: flex;
/* justify-content: center;
align-items: center; */

/* width: 100%; */
/* max-width: 1366px; */

`
export const CamperBlogleft = styled.div`
display: flex;
flex: 1;
flex-direction: column;
width: 30%;
padding: 20px 20px;
h1{
    color: #000;
font-family: Montserrat;
font-size: 28px;
font-style: normal;
font-weight: 600;
line-height: normal;
}
h2{
    color: var(--sariq, #FF7A00);
font-family: Montserrat;
font-size: 18px;
font-style: normal;
font-weight: 400;
line-height: normal;
}
p{
    color: #000;
font-family: Montserrat;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: normal;
}

`
export const CamperBlogright = styled.div`
display: grid;
grid-template-areas: "s s s";
/* width: 70%; */
gap: 20px;
justify-content: center;
align-items: center;

img{
    width: 258px;
height: 258px;
flex-shrink: 0;
    border-radius: 20px;
background: linear-gradient(0deg, rgba(0, 0, 0, 0.50) 0%, rgba(0, 0, 0, 0.50) 100%), url(<path-to-image>) lightgray 50% / cover no-repeat;

/* btn sh */
box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.10);
}
`
export const ResponsiveIframe = styled.iframe`
  width: 850px; 
  height: 480px; 
  border-radius: 20px; 
  border: none;
  overflow: hidden;

  @media only screen and (max-width: 834px) {
    width: 698px; 
    height: 387px; 
  }
`