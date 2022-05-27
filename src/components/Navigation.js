import React from 'react'

const Navigation = ( {setPage} ) => {


    const pageSetter = (pageName) => {

        setPage(pageName)

    }

    return (

        <div className="navigation_page"> 

            <div className='image_hero_container'> 

                <h2> Love and care </h2> 

            </div>

            <div className="navigation_container">

                

                    <h1> Insurance Policy Manager </h1> 
                    
                    <p> An internal application for insurance companies to manage policies, claims, and client history. </p> 

                    <div className="nav_button_container">
                        <label> 
                            <button 
                                    className='nav_button' 
                                    onClick={() => pageSetter('CreatePolicy')}
                                    > 
                                Create Policy 
                            </button> 
                        </label>
                    </div>

                    <div className="nav_button_container">
                        <label> 
                            <button 
                                    className='nav_button'
                                    onClick={() => pageSetter('SeeCurrentPolicies')}
                                    > See Current Policies 
                            </button> 
                        </label>
                    </div>

                    <div className="nav_button_container">
                        <label> 
                            <button 
                                className='nav_button'
                                onClick={() => pageSetter('ProcessClaims')}
                            > Process Claims 
                            </button> 
                        </label>
                    </div>

                    <div className="nav_button_container">
                        <label> 
                            <button className='nav_button' 
                                    id="last_button"
                                    onClick={() => pageSetter('SeeHistory')}
                                    > See History 
                            </button> 
                        </label>
                    </div>

                
                
                
            </div> 

            <div className="company_info_container"> 

                <div>
                    <label> Budget: </label> 
                    <span> NUMBER </span>
                </div>

                <div>
                    <label> Policy Holders: </label> 
                    <span> NUMBER </span>
                </div>
                
            </div>

        
        </div>

    )


}

export default Navigation