import React from 'react'
import { Link, useNavigate } from 'react-router-dom'



const ServicesComp = () => {
    let navigate = useNavigate();

    function handleBack(){
        navigate(-1);
    }
  return (
    <>
    <div>
        <button onClick={handleBack}>back</button><h1>abdulboriy</h1>
    <Link>
    <button>Faruux</button></Link>
    </div>
   
</>

  )
}

export default ServicesComp