import React, { useState } from 'react'

import Navigation from './Navigation'
import CreatePolicyForm from './CreatePolicyForm'
import SeeCurrentPolicies from './SeeCurrentPolicies'
import ProcessClaims from './ProcessClaims'
import SeeHistory from './SeeHistory'
import PolicyCreator from './PolicyCreator'

import '../styles/base.css'
import '../styles/Navigation.css'
import '../styles/SeeCurrentPolicies.css'
import '../styles/CreatePolicyForm.css'





const App = () => {

    const [render, setRender] = useState('PolicyCreator')

    const setPage = (pageName) => {

        setRender(pageName);
    }

    return (

       

        
        <div className='main_div'>

        <div className='navigation_page'>

            
            <div className='left_portion'>
                <Navigation setPage={setPage} />
            </div>
            
            
            
                <div className="right_portion">

                <header>
                    <h1> Life Giver International </h1>
                    <p> Giving you and yours time </p> 
                </header>

                    {render === 'PolicyCreator' ? <PolicyCreator setPage={setPage} /> : null}
                    {render === 'SeeCurrentPolicies' ? <SeeCurrentPolicies setPage={setPage} /> : null}
                    {render === 'ProcessClaims' ? <ProcessClaims setPage={setPage} /> : null}
                    {render === 'SeeHistory' ? <SeeHistory setPage={setPage} /> : null}
                </div>
            
            
        </div>
            

        </div>
        

    )


}

export default App