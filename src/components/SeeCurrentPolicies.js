import React from 'react'
import { connect } from 'react-redux'
import { createPolicy } from '../actions'


const SeeCurrentPolicies = ( {policies, setPage} ) => {

   

    const policyList = policies.map((policy) => 

        <div key={policy.id} >
            <div> Name: {policy.name} </div> 
            <div> id: {policy.id} </div> 
            <div> Age: {policy.age} </div>
            <div> Name: {policy.type} </div>
            <div> Name: {policy.claimAmount} </div>
            <br />
        </div>
        
        

    )

    return (
        
        <div>
            <button onClick={() => setPage('Navigation')}> Go back </button>
            
            {policyList}

        </div>

        

    ) 

}

const mapStateToProps = (state) => {
    return { policies: state.policies }
}

export default connect(mapStateToProps)(SeeCurrentPolicies)