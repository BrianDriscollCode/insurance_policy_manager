const initialBudget = 10000000;

export default (totalBudget = initialBudget, action) => {

    if (action.type === "PROCESS_CLAIM") {

        return totalBudget - action.payload;

    }

    return totalBudget;

}