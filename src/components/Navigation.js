import React from 'react'
import { connect } from 'react-redux' 
import main_icon from '../images/main_icon.png'

const Navigation = ( {setPage, budget, policies} ) => {


    const pageSetter = (pageName) => {

        setPage(pageName)

    }

    return (

        <div> 

            <div className="navigation_container">

                
                    <img src={main_icon} className="main_icon" /> 

                    <h1> Insurance Policy Manager </h1> 
                    
                    <p> An internal application for insurance companies to manage policies, claims, and client history. </p> 

                    <div className="nav_button_container">
                        
                            <button 
                                    className='nav_button' 
                                    id="nav_button_id"
                                    onClick={() => pageSetter('PolicyCreator')}
                                    > 
                                Create Policy 
                            </button> 
                        
                    </div>

                    <div className="nav_button_container">
                       
                            <button 
                                    className='nav_button'
                                    id="nav_button_id"
                                    onClick={() => pageSetter('SeeCurrentPolicies')}
                                    > See Current Policies 
                            </button> 
                        
                    </div>

                    <div className="nav_button_container">
                    
                            <button 
                                className='nav_button'
                                id="nav_button_id"
                                onClick={() => pageSetter('ProcessClaims')}
                            > Process Claims 
                            </button> 
                     
                    </div>

                    <div className="nav_button_container">
                   
                            <button className='nav_button' 
                                    id="last_button"
                                    onClick={() => pageSetter('SeeHistory')}
                                    > See History 
                            </button> 
               
                    </div>

                    <div className="company_info_container"> 

                        <div>
                            <label> Budget: </label> 
                            <span> ${ budget.toLocaleString() } </span>
                        </div>

                        <div>
                            <label> Policy Holders: </label> 
                            <span> { policies.length }  </span>
                        </div>

                    </div>
                
                
                
            </div> 

        

        
        </div>

    )


}

const mapStateToProps = (state) => {

    return { budget: state.budget, policies: state.policies }

}

export default connect(mapStateToProps)(Navigation)