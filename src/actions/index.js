
export const createPolicy = (policyObject) => {

    return {
        type: "CREATE_POLICY",
        payload: policyObject

    }

}

export const deletePolicy = (policyID) => {

    return {
        type: "DELETE_POLICY",
        payload: policyID

    }

}

export const trackAction = (dateObject) => {


    return {
        type: "TRACK_ACTION",
        payload: dateObject

    }

} 

export const processClaim = (claim) => {


    return {
        type: "PROCESS_CLAIM",
        payload: claim
    }

}

export const editPolicyFromClaim = (claimObject) => {

    return {
        type: "EDIT_CLAIM",
        payload: claimObject
    }

}