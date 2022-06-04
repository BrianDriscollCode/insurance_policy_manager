import React from "react"


const ProcessClaimsComplete = ( {trackSubmittal} ) => {


    return (

        <div className="process_claim_container"> 

         <h2> Claim Submitted </h2>  
         <button 
            onClick={() => trackSubmittal(false)}
            className="delete_or_submit_button"
        > Submit another claim </button>   
            
            
        </div> 

    )



}

export default ProcessClaimsComplete