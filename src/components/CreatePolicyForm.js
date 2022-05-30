import React, { useState } from 'react'
import { connect } from 'react-redux'
import { createPolicy } from '../actions'
import { v4 as uuidv4 } from 'uuid'


const CreatePolicyForm = ( props ) => {

    const [newPolicy, setNewPolicy] = useState([])
    const [name, setName] = useState('')
    const [age, setAge] = useState(0)
    const [type, setType] = useState('')
    const [claimAmount, setClaimAmount] = useState(0)

    const setPolicyCreator = props.setPolicyCreator;

    const handleNameChange = (event) => {
    
        setName(event.target.value)

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

    const submitNewPolicy = (e) => {

        e.preventDefault();
        let uniqueID = uuidv4();
        props.createPolicy({name: name, id: uniqueID, age: age, type: type, claimAmount: claimAmount})
        setPolicyCreator(); //toggle to submit message page "<PolicySubmitted /> via <PolicyCreator />"

    }

    console.log(props.policies)
    console.log(props.setPage)

    return (

        <div>

            <button onClick={() => props.setPage('Navigation')}> Go back </button>

            <h2> Create a new policy</h2>

            <form onSubmit={submitNewPolicy}>
                    <div> 
                    <label> Enter name: </label>
                    <input 
                        type="text"
                        value={name}
                        onChange={handleNameChange}
                    />
                </div>

                <div> 
                    <label> Enter age (max: 120): </label>
                    <input 
                        type="number"
                        value={age}
                        onChange={handleAgeChange}
                    />
                </div>

                <div> 
                    <label> Choose type: </label>
                    <input 
                        type="text"
                        value={type}
                        onChange={handleTypeChange}
                    />
                </div>

                <div> 
                    <label> Enter claim amount (max: 200000): </label>
                    <input 
                        type="number"
                        value={claimAmount}     
                        onChange={handleClaimAmountChange}
                    />
                </div>

                <button onClick={submitNewPolicy}> Add Policy </button> 

            </form>

        </div> 

    )


}

const mapStateToProps = (state) => {
    return { policies: state.policies }
}


export default connect(mapStateToProps, { createPolicy })(CreatePolicyForm)