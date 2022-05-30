import React, { useState } from 'react'

import Navigation from './Navigation'
import CreatePolicyForm from './CreatePolicyForm'
import SeeCurrentPolicies from './SeeCurrentPolicies'
import ProcessClaims from './ProcessClaims'
import SeeHistory from './SeeHistory'
import PolicyCreator from './PolicyCreator'

import '../styles/base.css'
import '../styles/Navigation.css'





const App = () => {

    const [render, setRender] = useState('Navigation')

    const setPage = (pageName) => {

        setRender(pageName);
    }

    return (

        <div className='main_div'>

            <header>
                <h1> Life Giver International </h1>
                <tagline> Giving you and yours time </tagline> 
            </header>

            {render === 'Navigation' ? <Navigation setPage={setPage} /> : null}
            {render === 'PolicyCreator' ? <PolicyCreator setPage={setPage} /> : null}
            {render === 'SeeCurrentPolicies' ? <SeeCurrentPolicies setPage={setPage} /> : null}
            {render === 'ProcessClaims' ? <ProcessClaims setPage={setPage} /> : null}
            {render === 'SeeHistory' ? <SeeHistory setPage={setPage} /> : null}

            <footer> 

                <h2> This is a footer </h2>

            </footer>


        </div>

    )


}

export default App