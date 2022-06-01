import React from 'react'
import { connect } from 'react-redux'

const SeeHistory = ( {history, setPage} ) => {


    const allHistory = history.map((entry) => 
    
        <div> 
            <div> Action: {entry.action} </div> 
            <div> Date: {entry.date} </div> 
            <div> PolicyID: {entry.policyID} </div> 
            <br />
        </div>

    )

    return (

        <div> 
            <button onClick={() => setPage('Navigation')}> Go Back </button>
            {allHistory}

        </div>

    )

}

const mapStateToProps = (state) => {
    return { history: state.history }
}

export default connect(mapStateToProps)(SeeHistory)