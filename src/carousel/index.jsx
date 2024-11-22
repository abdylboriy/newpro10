import React from 'react'
import { MultiCar } from './styled';
import MultiCarousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Carou from '../assest/cars/camp.svg'
import Carone from '../assest/cars/22 1.svg'
import Cartwo from '../assest/cars/c a.svg'
import Carthree from '../assest/cars/camp (1).svg'
import Carfour from '../assest/cars/image 2.svg'

const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 700, min: 0 },
      items: 1
    }
  };

const MultiCarouselComponent = () => {
  return (
    <>
    <MultiCarousel responsive={responsive}>
  <MultiCar>
    <img src={Carou} alt="car" />
    <h1>Knaus</h1>
    <button>Discover the range</button>
    <p>Choose a model</p>
  </MultiCar>
  <MultiCar>
    <img src={Carone} alt="car" />
    <h1>escape</h1>
    <button>Discover the range</button>
    <p>Choose a model</p>
  </MultiCar><MultiCar>
    <img src={Cartwo} alt="car" />
    <h1>Aidal</h1>
    <button>Discover the range</button>
    <p>Choose a model</p>
  </MultiCar><MultiCar>
    <img src={Carthree} alt="car" />
    <h1>abubakr</h1>
    <button>Discover the range</button>
    <p>Choose a model</p>
  </MultiCar><MultiCar>
    <img src={Carfour} alt="car" />
    <h1>Lyseo</h1>
    <button>Discover the range</button>
    <p>Choose a model</p>
  </MultiCar>
</MultiCarousel>
</>
  )
}

export default MultiCarouselComponent