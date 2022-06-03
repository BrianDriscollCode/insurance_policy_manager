import React, { useState, useRef } from 'react'
import { connect } from 'react-redux'
import { processClaim } from '../actions'


const ProcessClaims = ( {budget, policies, processClaim} ) => {

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

    const dispatchClaim = () => {

        processClaim(calculatedClaim)
        console.log('claim processed')

    }

    // console.log(budget, '-budget')
    // console.log(percentage, '-percentage')
    // console.log(clientClaim, 'clientClaim')
    console.log(calculatedClaim)

    return(

        
        <div>
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
                    
                        policy.firstName == searchInput.trim() || policy.firstName.toLowerCase() == searchInput.toLowerCase().trim() ? 
                            <tr key={policy.id} >
                                <td> {policy.firstName} </td> 
                                <td> {policy.lastName} </td> 
                                <td> {policy.policyID} </td> 
                                <td> {policy.type} </td>
                                <td> {policy.claimAmount} </td>
                                <td> <button onClick={dispatchClaim} value={policy.policyID}> Claim </button> </td> 
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

                {

                    policies.map((policy) => 
                                        
                        policy.policyID == searchInput.trim() || policy.policyID.toLowerCase() == searchInput.toLowerCase().trim() ? 
                            <tr key={policy.id} >
                                <td> {policy.firstName} </td> 
                                <td> {policy.lastName} </td> 
                                <td> {policy.policyID} </td> 
                                <td> {policy.type} </td>
                                <td> {policy.claimAmount} </td>
                                <td> <button value={policy.policyID}> Claim </button> </td>
                                <td> 
                                    <select value={percentage} onChange={handleSelectChange}>  
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

                {

                    policies.map((policy) => 
                                        
                        policy.lastName == searchInput.trim() || policy.lastName.toLowerCase() == searchInput.toLowerCase().trim() ? 
                            <tr key={policy.id} >
                                <td> {policy.firstName} </td> 
                                <td> {policy.lastName} </td> 
                                <td> {policy.policyID} </td> 
                                <td> {policy.type} </td>
                                <td> {policy.claimAmount} </td>
                                <td> <button value={policy.policyID} onClick={dispatchClaim}> Claim </button> </td>
                                <td> 
                                    <select value={percentage} onChange={handleSelectChange}>  
                                        <option value={0}> 0% </option><option value={0}> 0% </option>
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
            <div>
                Budget after claim: {'$' + (budget - calculatedClaim).toLocaleString()}
            </div> 

        </div> 
        
    )

}

const mapStateToProps = (state) => {

        return {budget: state.budget, policies: state.policies}

}

export default connect(mapStateToProps, { processClaim })(ProcessClaims)