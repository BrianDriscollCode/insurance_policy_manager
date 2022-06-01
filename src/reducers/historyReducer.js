const initialHistory = [

    { action: 'Policy Created', date: '2/21/2022', policyID: '74d5220e-ac34-462b-9492-616b3218a942'},
    { action: 'Policy Created', date: '3/05/2022', policyID: 'cabe91f4-ad53-4bdb-b2cc-ccce8b23c6de'},
    { action: 'Policy Created', date: '3/15/2022', policyID: 'a65876cc-25af-4218-9cb3-ab978b52e2c8'},
    { action: 'Policy Created', date: '3/25/2022', policyID: '0516f024-2aa8-43b8-8af2-7d16c0fad45b'}

]

export default (allHistory = initialHistory, action) => {

    if (action.type === "TRACK_ACTION") {
        return [...allHistory, action.payload];
    }

    return allHistory

}