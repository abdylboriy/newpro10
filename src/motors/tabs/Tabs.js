import styled from "styled-components";

export const TabsConteiner = styled.div`
display: flex;
flex-direction: column;
width: 100%;
margin: 0;
padding: 20px;
`
export const TabsNavbar = styled.div`
font-size: 24px;
margin-bottom: 20px;
color: #333;
display: flex;
justify-content: space-between;
align-items: center;
width: 100%;
height: 100px;
p{
    color: var(--blue, #006DAB);
font-family: Montserrat;
font-size: 20px;
font-style: normal;
font-weight: 600px;
line-height: normal;
}
`


export const TabsDataleft = styled.div`
display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 8px;
  margin-bottom: 20px;
  background-color: #fff;
  /* padding-left: 4%;
  padding-right: 4%; */
  transition: 0.3s;
  width: 100%;
  height: 100%;
  gap: 10px;
  img{
    width: 150px;
  height: 100px;
  border-radius: 8px;
  object-fit: cover;
  }
`
export const TabsdataRight = styled.div`
display: flex;
flex: 1;
flex-direction: column;
/* margin-left: 15px; */
width: 100%;
height: 100px;
h1{
    color: var(--text, #373737);
font-family: Montserrat;
font-size: 18px;
font-style: normal;
font-weight: 500;
line-height: normal;
}
h2{
    color: rgba(55, 55, 55, 0.80);
font-family: Montserrat;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: normal;
}
p{
    color: #373737;
font-family: Montserrat;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: normal;
}
`
export const Tabsdatamid = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
h1{
    color: rgba(55, 55, 55, 0.70);
font-family: Montserrat;
font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: normal;
}

`
export const Tabsinfo7 = styled.div`
display:flex;
flex-direction:column;
align-items: flex-start;
flex: 1;
width: 100%;
height: 432px;
border-radius: 10px;
border: 1px solid rgba(0, 109, 171, 0.10);
background: #FFF;
box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.10);
padding: 30px;

h1{color: var(--text-color, #023047);
font-family: Montserrat;
font-size: 24px;
font-style: normal;
font-weight: 700;
line-height: 130%; /* 31.2px */

}
#input3 {
    margin-top: 20px;
  width: 100%;
  height: 50px;
  border-radius: 8px;
  padding-left: 10px;
  background-color:rgba(55, 55, 55, 0.10);
  border: none;
}



#input1 {
    margin-top: 10px;
  width: 100%;
  height: 50px;
  border-radius: 8px;
  padding-left: 10px;
  background-color:rgba(55, 55, 55, 0.10);
  border: none;
}


textarea {
  margin-top: 10px;
  width: 100%;
  height: 120px;
  border-radius: 8px;
  padding: 10px;
  background-color: rgba(55, 55, 55, 0.10);
  border: none;
  align-items: start;
  text-align: start;
}

textarea::placeholder {
  color: rgba(55, 55, 55, 0.70);
  font-family: Montserrat;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 100%; /* 14px */
}


#input1::placeholder,
 
  #input3::placeholder {
    color: rgba(55, 55, 55, 0.70);
font-family: Montserrat;
font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: 100%; /* 14px */
    
  }

  button{color: #FFF;
font-family: Montserrat;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: 100%; /* 16px */
border-radius: 10px;
background: var(--blue, #006DAB);
width: 100%;
height: 50px;
flex-shrink: 0;
margin-top: 25px;
  }


`
export const FAQ = styled.div`
display: flex;
`
export const ContactCom = styled.div`
display: flex;

`
export const ContactD = styled.div`
display: flex;
flex: 2;
flex-direction: column;
/* padding: 4%; */
width: 100%;
`
export const ContactDiv = styled.div`
display: flex;
width: 100%;
height: 298px;
flex-shrink: 0;
img {   object-fit: cover;
    width: 100%; 
 
   }

`
export const Contact1 = styled.div`
display: flex;
gap: 20px;
margin-top: 10px;




`
export const Contact2 = styled.div`
display: flex;
flex: 1;
flex-direction: column;
border-radius: 8px;
background: #FFF;
box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.25);
width: 334.421px;
height: 109px;
flex-shrink: 0;
padding: 1%;

h1{
  color: #666;
font-family: Montserrat;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 130%; /* 18.2px */
}
h2{
  color: var(--txt-color, #1E1C1C);
font-family: Montserrat;
font-size: 18px;
font-style: normal;
font-weight: 500;
line-height: 130%; /* 23.4px */
}
`
export const Contact3 = styled.div`
display: flex;
flex: 1;
flex-direction: column;
border-radius: 8px;
background: #FFF;
box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.25);
width: 334.421px;
height: 109px;
flex-shrink: 0;
justify-content: center;
padding: 1%;

h1{
  color: #666;
font-family: Montserrat;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 130%; /* 18.2px */
}
h2{
  color: var(--txt-color, #1E1C1C);
font-family: Montserrat;
font-size: 18px;
font-style: normal;
font-weight: 500;
line-height: 130%; /* 23.4px */
}
`