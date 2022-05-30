import { combineReducers } from "redux"; 


const initialPolicies = [

        { name: 'Joe', id: '74d5220e-ac34-462b-9492-616b3218a942', age: 70, type: 'Life', claimAmount: 120000 },
        { name: 'Sarah', id: 'cabe91f4-ad53-4bdb-b2cc-ccce8b23c6de', age: 86, type: 'Injury', claimAmount: 50000 },
        { name: 'Bob', id: 'a65876cc-25af-4218-9cb3-ab978b52e2c8', age: 67, type: 'Full', claimAmount: 180000 },
        { name: 'Loki', id: '0516f024-2aa8-43b8-8af2-7d16c0fad45b', age: 59, type: 'Life', claimAmount: 90000 }

    ]

const policyReducer = (allPolicies = initialPolicies, action) => {

    if (action.type === "CREATE_POLICY") {
        return [...allPolicies, action.payload]
    }

    return allPolicies

}

export default combineReducers({

    policies: policyReducer,

})