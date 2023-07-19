import React from "react";
import {ClimbingBoxLoader} from "react-spinners"
import "../styles/Login.css"

function Loader(){
    return (
        <>
         <div className="loader-container" style={{background:"black" , width:"100%",height:"1000px"}}>
      <ClimbingBoxLoader color="#f3c803" loading size={50} speedMultiplier={1} style={{marginLeft:"50%"}} />
    </div>
        </>
    )
}
export default Loader;