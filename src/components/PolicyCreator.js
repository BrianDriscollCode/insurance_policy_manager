import React, {useState} from 'react';
import CreatePolicyForm from './CreatePolicyForm';
import PolicySubmitted from './PolicySubmitted';

const PolicyCreator = (props) => {

    const [isPolicyCreated, setIsPolicyCreated] = useState(true)

    const setPolicyCreator = () => {

        setIsPolicyCreated(!isPolicyCreated)

    }

    
    return (

        isPolicyCreated ? 
            <CreatePolicyForm setPage={props.setPage} setPolicyCreator={setPolicyCreator} /> :
            <PolicySubmitted setPage={props.setPage} setPolicyCreator={setPolicyCreator} />
        

    )

}

export default PolicyCreator