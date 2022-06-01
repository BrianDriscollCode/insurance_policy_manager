import React from 'react'
import { connect } from 'react-redux'


const SeeCurrentPolicies = ( {policies, setPage} ) => {

   

    const policyList = policies.map((policy) => 

        <tr key={policy.id} >
            <td> {policy.firstName} </td> 
            <td> {policy.lastName} </td> 
            <td> {policy.policyID} </td> 
            <td> {policy.age} </td>
            <td> {policy.type} </td>
            <td> {policy.claimAmount} </td>
            <td> {policy.dateCreated} </td>
            <td> <button value={policy.policyID}> Delete </button> </td> 
            <br />
        </tr>
        
        

    )

    console.log(policies)

    return (
        
        <div className='see_policies_container'>
            <div className='see_policies_button_container'>
                <button className="see_policies_back_button" onClick={() => setPage('Navigation')}> Go back </button>
            </div> 
            
            
            <table id="customers">
                <tr>
                    <th> First Name </th>
                    <th> Last Name </th>
                    <th> Id </th>
                    <th> Age </th>
                    <th> Type</th>
                    <th> Claim Amount </th>
                    <th> Date Created </th>
                    <th> Delete </th>
                </tr>

                {policyList}
            </table>
            

        </div>

        

    ) 

}

const mapStateToProps = (state) => {
    return { policies: state.policies }
}

export default connect(mapStateToProps)(SeeCurrentPolicies)