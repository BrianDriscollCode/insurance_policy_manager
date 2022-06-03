const initialPolicies = [

    { firstName: 'Joe', lastName: 'Bogan', policyID: '74d5220e-ac34-462b-9492-616b3218a942', age: 70, type: 'Life', claimAmount: 120000, dateCreated: '2/21/2022' },
    { firstName: 'Sarah', lastName: 'Crawlin', policyID: 'cabe91f4-ad53-4bdb-b2cc-ccce8b23c6de', age: 86, type: 'Injury', claimAmount: 50000, dateCreated: '3/05/2022' },
    { firstName: 'Bob', lastName: 'Logar', policyID: 'a65876cc-25af-4218-9cb3-ab978b52e2c8', age: 67, type: 'Full', claimAmount: 180000, dateCreated: '3/15/2022' },
    { firstName: 'Loki', lastName: 'Thor', policyID: '0516f024-2aa8-43b8-8af2-7d16c0fad45b', age: 59, type: 'Life', claimAmount: 90000, dateCreated: '3/25/2022' }

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