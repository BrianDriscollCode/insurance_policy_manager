const initialPolicies = [

    { firstName: 'Joe', lastName: 'Bogan', policyID: '74d5220e-ac34-462b-9492-616b3218a942', age: 70, type: 'Life', claimAmount: 120000, dateCreated: '1/21/2021' },
    { firstName: 'Sarah', lastName: 'Crawlin', policyID: 'cabe91f4-ad53-4bdb-b2cc-ccce8b23c6de', age: 86, type: 'Injury', claimAmount: 50000, dateCreated: '1/25/2021' },
    { firstName: 'Bob', lastName: 'Logar', policyID: 'a65876cc-25af-4218-9cb3-ab978b52e2c8', age: 67, type: 'Full', claimAmount: 180000, dateCreated: '2/15/2021' },
    { firstName: 'Loki', lastName: 'Thor', policyID: '0516f024-2aa8-43b8-8af2-7d16c0fad45b', age: 59, type: 'Life', claimAmount: 90000, dateCreated: '2/25/2021' },
    { firstName: 'Cory', lastName: 'Jackson', policyID: 'dc70ed4b-7601-4062-9309-c6683a84786a', age: 74, type: 'Life', claimAmount: 100000, dateCreated: '5/19/2021' },
    { firstName: 'Gary', lastName: 'Tonon', policyID: '48972419-78bb-48c2-8ef8-fd8f482ed72d', age: 56, type: 'Injury', claimAmount: 150000, dateCreated: '6/05/2021' },
    { firstName: 'Donavan', lastName: 'Lopar', policyID: 'a65876cc-25af-4218-9cb3-ab978b52e2c8', age: 64, type: 'Full', claimAmount: 280000, dateCreated: '7/15/2021' },
    { firstName: 'Corala', lastName: 'Thompson', policyID: '92c4ba55-c76b-4976-aa2d-7cb5e596e315', age: 55, type: 'Life', claimAmount: 190000, dateCreated: '9/08/2021' },
    { firstName: 'Max', lastName: 'Jackson', policyID: '24eee016-68ab-43f0-ade2-839b000892e2', age: 65, type: 'Life', claimAmount: 70000, dateCreated: '10/28/2021' },
    { firstName: 'Laura', lastName: 'Bogan', policyID: '312dbc95-61bf-45b5-9091-226730324584', age: 86, type: 'Injury', claimAmount: 75000, dateCreated: '12/05/2021' },
    { firstName: 'Lothar', lastName: 'Bjornson', policyID: '15254db8-1450-45bf-8fa5-314a79ef2225', age: 61, type: 'Full', claimAmount: 120000, dateCreated: '2/15/2022' },
    { firstName: 'Rex', lastName: 'Nevala', policyID: '0de3ec3a-4a25-4e4b-8f2b-b8e3414d7530', age: 45, type: 'Life', claimAmount: 80000, dateCreated: '3/25/2022' },
    { firstName: 'Cory', lastName: 'Chase', policyID: '2ffb953c-41ee-4140-af35-d7ed4b523514', age: 33, type: 'Life', claimAmount: 125000, dateCreated: '4/21/2022' },
    { firstName: 'Mary', lastName: 'Token', policyID: 'aabe9fa2-a7d5-4fe2-bbad-48d814f84fd6', age: 43, type: 'Injury', claimAmount: 55000, dateCreated: '5/05/2022' }
    
]

export default (allPolicies = initialPolicies, action) => {

    //via CreatePolicyForm.js
    if (action.type === "CREATE_POLICY") {
        return [...allPolicies, action.payload]
    }

    //via SeeCurrentPolicies.js
    if (action.type === "DELETE_POLICY") {
        

        //update new array of objects without targeted entry
        const updatedPolicies = allPolicies.filter(policy => 
            
            policy.policyID !== action.payload
            
    )

    return updatedPolicies;

    }

    if (action.type === "EDIT_CLAIM") {

        const claimPayout = action.payload.claimAmount
        const entryID = action.payload.policyID

        const updatedList = allPolicies.map(policy => {

            if (policy.policyID == entryID) {
                return {...policy, claimAmount: policy.claimAmount - claimPayout} 
            }

            return policy;

        });

        return updatedList

    }

        

    

    return allPolicies

}