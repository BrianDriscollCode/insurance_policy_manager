import React, { useState, useRef } from 'react'
import { connect } from 'react-redux'
import { processClaim, editPolicyFromClaim, trackAction } from '../actions'



const ProcessClaims = ( {budget, policies, processClaim, trackSubmittal, editPolicyFromClaim, trackAction} ) => {

    const inputRef = useRef(null)
    const [searchInput, setSearchInput] = useState('Name or Policy ID')
    const [percentage, setPercentage] = useState(0)
    const [clientClaim, setClientClaim] = useState(0)
    const [calculatedClaim, setCalculatedClaim] = useState(0)

    const handleInput = (event) => {

        setSearchInput(event.target.value);
        
    }

    const handleClick = () => {

        inputRef.current.select();

    }

    const handleSelectChange = (event, dollarAmount) => {


        setCalculatedClaim(event.target.value * dollarAmount)
        setPercentage(event.target.value)
        setClientClaim(dollarAmount)
        

    }

    const dispatchClaim = (event) => {

        editPolicyFromClaim({policyID: event.target.value, claimAmount: calculatedClaim})
        processClaim(calculatedClaim)
        trackSubmittal(true) //toggles page


        const d = new Date();
        let currentDate = (d.getMonth() + 1).toString() + '/' + d.getDate().toString() + '/' + d.getFullYear().toString()
        trackAction({action: 'Claim Submitted', date: currentDate, policyID: event.target.value})
    
        
        console.log(calculatedClaim, "claim")
        console.log(event.target.value + "-id")
        


    }

    console.log(calculatedClaim)

    return(

        
        <div className="process_claim_container">
            <label> Search Policy </label>
            <div className="ui form field" style={{ marginTop: 20}}>
                <input ref={inputRef} onClick={handleClick} onChange={handleInput} value={searchInput} />   
            </div>
            
            

            <table id="customers">
                <tr>
                    <th> First Name </th>
                    <th> Last Name </th>
                    <th> Id </th>
                    <th> Type</th>
                    <th> Claim Amount </th>
                    <th> Claim </th>
                    <th> Claim Percentage </th> 
                </tr>

                {
                    
                    policies.map((policy) => 
                    
                        policy.firstName == searchInput.trim() || policy.firstName.toLowerCase() == searchInput.toLowerCase().trim() ||
                        policy.policyID == searchInput.trim() || policy.policyID.toLowerCase() == searchInput.toLowerCase().trim() ||
                        policy.lastName == searchInput.trim() || policy.lastName.toLowerCase() == searchInput.toLowerCase().trim() ? 
                            <tr key={policy.id} >
                                <td> {policy.firstName} </td> 
                                <td> {policy.lastName} </td> 
                                <td> {policy.policyID} </td> 
                                <td> {policy.type} </td>
                                <td> {policy.claimAmount} </td>
                                <td> 
                                    <button 
                                        className='delete_or_submit_button' 
                                        onClick={dispatchClaim} 
                                        value={policy.policyID}> 
                                            
                                            Claim 
                                    </button> 
                                </td> 
                                <td> 
                                    <select value={percentage} onChange={(e) => handleSelectChange(e, policy.claimAmount)}>  
                                        <option value={0}> 0% </option>
                                        <option value={0.25}> 25% </option>
                                        <option value={0.50}> 50% </option>
                                        <option value={0.75}> 75% </option>
                                        <option value={1}> 100% </option>
                                    </select> 
                                </td> 
                                <br />
                            </tr> : null
                        
                    )
                    
                
                }
                
            </table>

            <div>

                Claim amount: {calculatedClaim}

            </div>
            <div className='budget_after_claim_container'>
                Budget after claim: {'$' + (budget - calculatedClaim).toLocaleString()}
            </div> 

        </div> 
        
    )

}

const mapStateToProps = (state) => {

        return {budget: state.budget, policies: state.policies}

}

export default connect(mapStateToProps, { processClaim, editPolicyFromClaim, trackAction })(ProcessClaims)