import React from "react"


const ProcessClaimsComplete = ( {trackSubmittal} ) => {


    return (

        <div> 

         <h2> Claim Submitted </h2>  
         <button 
            onClick={() => trackSubmittal(false)}
            className="delete_or_submit_button"
        > Submit another claim </button>   
            
            
        </div> 

    )



}

export default ProcessClaimsComplete