
export const checkFirebaseCondition = (client: any, condition: any, dispatch: any, stateCondition: any) => {
    const arr = [];
    if (stateCondition.length > 0) {
        stateCondition.forEach((customer: any) => {
            if (client !== undefined) {
                if (customer[0].toUpperCase() !== client.toUpperCase()) {
                    arr.push("yes");
                }
            }
        })
    }
    if (arr.length === stateCondition.length) {
        checkCondition(client, condition, dispatch, stateCondition)
    }
}

export const checkCondition = (client: any, condition: any, dispatch: any, stateCondition: any) => {
    if (client !== undefined) {
        if (stateCondition.length > 0) {
            stateCondition.forEach((customer: any, index: number) => {
                if (customer[0].toUpperCase() === client.toUpperCase()) {
                    const conditionObj = {
                        Stitched: condition.Stitched > 0 ? condition.Stitched : customer[1].Stitched,
                        UnStitched: condition.UnStitched > 0 ? condition.UnStitched : customer[1].UnStitched,
                        OutOfOrder: condition.OutOfOrder > 0 ? condition.OutOfOrder : customer[1].OutOfOrder,
                        Lost: condition.Lost > 0 ? condition.Lost : customer[1].Lost,
                        Delivered: condition.Delivered > 0 ? condition.Delivered : customer[1].Delivered,
                    }
                    dispatch(updateConditiontR(conditionObj, index));
                } else {
                    dispatch(addConditionR(client, condition));
                }
            })
        } else {
            dispatch(addConditionR(client, condition))
        }
    }
}


export function addConditionR(client: any, condition: condition) {
    return {
        type: "Add_Condition",
        client,
        condition
    }
}

export function updateConditiontR(condition: condition, index: number) {
    return {
        type: "Update_Condition",
        index,
        condition
    }
}

type condition = {
    Stitched: any, UnStitched: any, OutOfOrder: any,
    Lost: any, Delivered: any,
}
