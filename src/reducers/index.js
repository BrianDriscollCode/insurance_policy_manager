import { combineReducers } from "redux"; 
import historyReducer from "./historyReducer";
import policyReducer from "./policyReducer";
import processClaimReducer from "./processClaimReducer";




export default combineReducers({

    policies: policyReducer,
    history: historyReducer,
    budget: processClaimReducer

})