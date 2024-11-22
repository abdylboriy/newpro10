import React from 'react'
import { Footer, Footerimg, Footernav } from './doctorStyled'
import footer1 from "./assest/youtube.svg"
import footer2 from "./assest/facebook.svg"
import footer3 from "./assest/naver.svg"
const FooterComponent = () => {

  return (
    <Footer>
<h1>Camper</h1>

<Footernav>
    <h3>Services </h3>
    <p>Camping</p>
    <p>Lodging</p>
    <p>Harbor</p>
    <p>Day Use</p>
</Footernav>
<Footernav>
    <h3>Menu</h3>
    <p>About</p>
    <p>Services</p>
    <p>Booking</p>
    <p>Blog</p>
</Footernav>
<Footernav>
<h3>Contact</h3>
<Footerimg>
    <img src={footer1} alt="logo" />
    <img src={footer2} alt="logo"  />
    <img src={footer3} alt="logo"  />
</Footerimg>
<p>021 Korea Seul, LA</p>
<p>camper@example.com</p>
<p>(021) 345-6789-99</p>
</Footernav>




    </Footer>
  )
}

export default FooterComponent