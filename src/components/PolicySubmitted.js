import React from 'react'

const PolicySubmitted = ({setPage, setPolicyCreator}) => {


    return (

        <div> 
            <h3> Policy has been submitted! </h3>
            <button className="delete_or_submit_button" onClick={() => setPolicyCreator()} > Create new policy </button>

        </div>

    )

}

export default PolicySubmitted