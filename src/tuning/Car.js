import styled from "styled-components";
import Sentr from '../assest/Weinsberg-CUVolution-Knaus-CUVision.jpg'

export const MidTuning = styled.div`
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

export const CarConteinerH = styled.div`
display: flex;
display:flex;
width:100% ;
height:381px;
padding:0% 4%;
gap: 20px;
margin-top: 4px;
`
export const CarIMg = styled.div`
display: flex;
flex: 1;
width: 100%;
height: 100%;
img{
    width: 100%;
    height: 100%;
}

`

export const CarHm= styled.div`
display:flex;
flex: 1;
width:100% ;
height:100%;
flex-direction:column;
border-radius: 10px;
background: #FFF;
padding: 4%;
/* btn sh */
box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.10);

`
export const CarContent = styled.div`
display:flex;
align-items:center;
justify-content: space-between;
width:100%;
height: 102px;
`
export const CarHeader= styled.div`
display: flex;
flex-direction: column;
flex-direction: column;
gap: 10px;
h1{
    color: #000;
font-family: Montserrat;
font-size: 25px;
font-style: normal;
font-weight: 700;
line-height: normal;
}
p{
    color: #000;
font-family: Montserrat;
font-size: 18px;
font-style: normal;
font-weight: 400;
line-height: normal;
}

`
export const CarPrice = styled.div`
display: flex;
align-items: center;
p{
    color: #006DAB;
font-family: Montserrat;
font-size: 30px;
font-style: normal;
font-weight: 700;
line-height: normal;
}
`
export const CarMid = styled.div`
display: flex;
flex: 1;
flex-direction: column;
gap: 10px;

h1{
    color: var(--text, #373737);
font-family: Montserrat;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: normal;
}
`
export const CarMid1 = styled.div`
display: flex;
flex: 1;
flex-direction: column;
gap: 10px;

p{
    color: rgba(55, 55, 55, 0.80);
font-family: Montserrat;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: normal;
}
`


export const CarBut = styled.div`
display: flex;
justify-content: center;
align-items: center;
padding-top: 20px;
gap: 10px;
`
export const CarBut1 = styled.button`
width: 181.5px;
height: 50.014px;
flex-shrink: 0;
border-radius: 10px;
background: var(--blue, #006DAB);
color: white;
`
export const CarBut2 = styled.button`
width: 181.5px;
height: 50.014px;
flex-shrink: 0;
border-radius: 10px;
border: 2px solid #FFF;
background: none;
color: #FFF;
`
export const PhotoContenier= styled.div`
display: flex;
`
export const PhotoLeft= styled.div`
display: flex;
flex: 1;
flex-direction: column;
/* justify-content: center; */
/* align-items: center; */
h1{
 
    padding: 4%;
    color: var(--text, #373737);
font-family: Montserrat;
font-size: 35px;
font-style: normal;
font-weight: 600;
line-height: normal;
}
h2{
    padding: 10px 10px;
    margin-top: 5px;
    color: #373737;
font-family: Montserrat;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 24px; /* 150% */
}`
export const ButtonMId = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin-top: 20px;
gap: 10px;
padding: 4%;

.btn1 {
  justify-content: center;
  align-items: center;
  width: 181.5px;
  height: 50.014px;
  flex-shrink: 0;
  border-radius: 10px;
  background: var(--blue, #006DAB);
  color: white;
  font-family: Montserrat;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}

.btn2 {
  background: #FAFAFA;
  border: 1px solid #006DAB;
  border-radius: 10px;
  width: 181.5px;
  height: 50.014px;
  flex-shrink: 0;
  color: #006DAB;
  font-family: Montserrat;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  justify-content: center;
  align-items: center;
}
`
export const PhotoRight= styled.div`
display: flex;
flex: 1;
img{
    width: 100%;
height: 100%;
flex-shrink: 0;
}
`

