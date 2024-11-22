import styled from "styled-components";

export const MultiCar = styled.div`
display: flex;
gap: 15px;
flex-direction: column;
justify-content:center;
align-items:center;
width: 100%;
height:319px;
img{
    height: 167px;
}
h1{
    color: var(--text, #373737);
text-align: center;
font-family: Montserrat;
font-size: 18px;
font-style: normal;
font-weight: 600;
line-height: normal;
}
button{
    width: 90%;
height: 45px;
background-color:#006DAB;
flex-shrink: 0;
    color: #FFF;
font-family: Montserrat;
font-size: 18px;
font-style: normal;
font-weight: 700;
line-height: normal;
position: relative;
  clip-path: polygon(10% 0%, 100% 0%, 90% 100%, 0% 100%);
}
p{
    color: var(--text, #373737);
font-family: Montserrat;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: normal;
}
`