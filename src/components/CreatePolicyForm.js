import React, { useState } from 'react'
import { connect } from 'react-redux'
import { createPolicy, trackAction } from '../actions'
import { v4 as uuidv4 } from 'uuid'


const CreatePolicyForm = ( props ) => {

    const [newPolicy, setNewPolicy] = useState([])
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('');
    const [age, setAge] = useState(0)
    const [type, setType] = useState('')
    const [claimAmount, setClaimAmount] = useState(0)

    const setPolicyCreator = props.setPolicyCreator;

    const handleFirstNameChange = (event) => {
    
        setFirstName(event.target.value)

    }

    const handleLastNameChange = (event) => {

        setLastName(event.target.value)

    }

    const handleAgeChange = (event) => {
    
        if (event.target.value < 121) {
            setAge(event.target.value) 
        }
        
    }

    const handleTypeChange = (event) => {
    
        setType(event.target.value)

    }

    const handleClaimAmountChange = (event) => {
    
        if (event.target.value < 200001) {
            setClaimAmount(event.target.value)
        }
        

    }

    const handleClick = (event) => {

        event.target.select()

    }

    const submitNewPolicy = (e) => {

        e.preventDefault();

        let uniqueID = uuidv4();
        const d = new Date();
        let currentDate = (d.getMonth() + 1).toString() + '/' + d.getDate().toString() + '/' + d.getFullYear().toString()

        props.trackAction({action: 'Created Policy', date: currentDate, policyID: uniqueID})
        props.createPolicy({firstName: firstName.trim(), lastName: lastName.trim(), policyID: uniqueID, age: age, type: type, claimAmount: claimAmount, dateCreated: currentDate})
        
        setPolicyCreator(); //toggle to submit message page "<PolicySubmitted /> via <PolicyCreator />"

    }

    console.log(props.policies)
    console.log(props.history)
    console.log(props)

    console.log(firstName, lastName, age, type, claimAmount)


    return (

        <div className="createPolicyContainer">
            
            <h2> Create a new policy</h2>

            <div className="ui form createPolicyForm">
                <div className="two fields">
                    <div className="field">
                        <label style={{color: 'white'}}>First name</label>
                        <input 
                            type="text" 
                            placeholder="First Name"
                            value={firstName}
                            onChange={handleFirstNameChange} 
                        />
                    </div>
                    <div className="field">
                        <label style={{color: 'white'}}>Last name</label>
                        <input 
                            type="text" 
                            placeholder="Last Name"
                            value={lastName}
                            onChange={handleLastNameChange}
                        />
                    </div>
                </div>

                <div className='field'>

                    <label style={{color: 'white'}}> Enter age </label>
                    <input 
                        placeholder='0' 
                        type="number"
                        value={age}
                        onChange={handleAgeChange}
                        onClick={handleClick}
                    />

                </div>

                <div class="field">
                    <label style={{color: 'white'}}>Type</label>
                    <select class="ui fluid dropdown" value={type} onChange={handleTypeChange}>
                            <option value="">Type</option>
                            <option value="Life">Life</option>
                            <option value="Injury">Injury</option>
                            <option value="Health">Health</option>
                    </select>
                </div>

                <div className='field'>

                    <label style={{color: 'white'}}> Claim amount </label>
                    <input
                        placeholder='0' 
                        type="number"
                        value={claimAmount}
                        onChange={handleClaimAmountChange}
                        onClick={handleClick}
                    />

                </div>

                <div className="submitButtonContainer">
                    <button onClick={submitNewPolicy}> Submit </button>
                </div> 

               
            </div>

        </div> 

    )


}

const mapStateToProps = (state) => {
    return { policies: state.policies, history: state.history }
}


export default connect(mapStateToProps, { createPolicy, trackAction })(CreatePolicyForm)