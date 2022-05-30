import React from 'react'

const PolicySubmitted = ({setPage, setPolicyCreator}) => {


    return (

        <div> 
            <h3> Policy has been submitted! </h3>
            <button onClick={() => setPage('Navigation')}> Back to navigation</button>
            <button onClick={() => setPolicyCreator()} > Create new policy </button>

        </div>

    )

}

export default PolicySubmitted