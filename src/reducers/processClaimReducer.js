const initialBudget = 10000000;

export default (totalBudget = initialBudget, action) => {

    if (action.type === "PROCESS_CLAIM") {

        totalBudget -= action.claimAmount;
        return totalBudget

    }

    return totalBudget

}