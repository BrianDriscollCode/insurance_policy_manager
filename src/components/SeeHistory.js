import React from 'react'
import { connect } from 'react-redux'

//reusing styles from "SeeCurrentPolicies.scss"

const SeeHistory = ( {history, setPage} ) => {


    const allHistory = history.map((entry) => 
    
        <tr> 
            <td> {entry.action} </td> 
            <td> {entry.date} </td> 
            <td> {entry.policyID} </td> 
            <br />
        </tr>

    )

    return (

        <div className="see_policies_container">

            <h2> History </h2>
            
            
            <table id="customers"> 
                <tr>
                    <th> Action </th>
                    <th> Date </th>
                    <th> PolicyID </th>
                </tr>


                {allHistory}

            </table>
        </div>

        

    )

}

const mapStateToProps = (state) => {
    return { history: state.history }
}

export default connect(mapStateToProps)(SeeHistory)