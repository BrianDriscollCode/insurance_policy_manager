import React, { useState } from 'react'
import ProcessClaimsForm from './ProcessClaimsForm'
import ProcessClaimsComplete from './ProcessClaimsComplete'




const ProcessClaims = () => {

    const [claimSubmitted, setClaimSubmitted] = useState(false)


    const trackSubmittal = (isSubmitted) => {

        setClaimSubmitted(isSubmitted)
        
    }

    return(

        claimSubmitted ? 
            <ProcessClaimsComplete trackSubmittal={trackSubmittal} /> :
            <ProcessClaimsForm trackSubmittal={trackSubmittal} />

        
    )

}


export default ProcessClaims