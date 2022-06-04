const initialHistory = [

    { action: 'Created Policy', date: '1/21/2021', policyID: '74d5220e-ac34-462b-9492-616b3218a942'},
    { action: 'Created Policy', date: '1/25/2021', policyID: 'cabe91f4-ad53-4bdb-b2cc-ccce8b23c6de'},
    { action: 'Created Policy', date: '2/15/2021', policyID: 'a65876cc-25af-4218-9cb3-ab978b52e2c8'},
    { action: 'Created Policy', date: '2/25/2021', policyID: '0516f024-2aa8-43b8-8af2-7d16c0fad45b'},
    { action: 'Created Policy', date: '5/19/2021', policyID: '0516f024-2aa8-43b8-8af2-7d16c0fad45b'},
    { action: 'Created Policy', date: '6/05/2021', policyID: 'dc70ed4b-7601-4062-9309-c6683a84786a'},
    { action: 'Created Policy', date: '7/15/2021', policyID: 'a65876cc-25af-4218-9cb3-ab978b52e2c8'},
    { action: 'Created Policy', date: '9/08/2021', policyID: '92c4ba55-c76b-4976-aa2d-7cb5e596e315'},
    { action: 'Created Policy', date: '10/28/2021', policyID: '24eee016-68ab-43f0-ade2-839b000892e2'},
    { action: 'Created Policy', date: '12/05/2021', policyID: '312dbc95-61bf-45b5-9091-226730324584'},
    { action: 'Created Policy', date: '2/15/2022', policyID: '15254db8-1450-45bf-8fa5-314a79ef2225'},
    { action: 'Created Policy', date: '3/25/2022', policyID: '2ffb953c-41ee-4140-af35-d7ed4b523514'},
    { action: 'Created Policy', date: '4/21/2022', policyID: '0de3ec3a-4a25-4e4b-8f2b-b8e3414d7530'},
    { action: 'Created Policy', date: '5/05/2022', policyID: 'aabe9fa2-a7d5-4fe2-bbad-48d814f84fd6'},
    
]

export default (allHistory = initialHistory, action) => {

    if (action.type === "TRACK_ACTION") {
        return [...allHistory, action.payload];
    }

    return allHistory

}