
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
                    dispatch(updateConditiontR(condition, index))
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
