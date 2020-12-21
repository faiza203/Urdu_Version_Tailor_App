
export const checkFirebaseMeasurment = (client: any, measurment: any, dispatch: any, stateMeasurment: any) => {
    const arr = [];
    if (stateMeasurment.length > 0) {
        stateMeasurment.forEach((customer: any) => {
            if (client !== undefined) {
                if (customer[0] !== client) {
                    arr.push("yes");
                }
            }
        })
    }
    if (arr.length === stateMeasurment.length) {
        checkMeasurment(client, measurment, dispatch, stateMeasurment)
    }
}

export const checkMeasurment = (client: any, measurment: any, dispatch: any, stateMeasurment: any) => {
    if (client !== undefined) {
        if (stateMeasurment.length > 0) {
            stateMeasurment.forEach((customer: any, index: number) => {
                if (customer[0] === client) {
                    dispatch(updateMeasurmentR(client, measurment, index))
                } else {
                    dispatch(addMeasurmentR(client, measurment));
                }
            })
        } else {
            dispatch(addMeasurmentR(client, measurment))
        }
    }
}


export function addMeasurmentR(client: any, measurment: measurment) {
    return {
        type: "Add_Measurment",
        client,
        measurment
    }
}

export function updateMeasurmentR(client: any, measurment: measurment, index: number) {
    return {
        type: "Update_Measurment",
        client,
        index,
        measurment
    }
}

type measurment = {
    Length: any, Arm: any, Tera: any, Neck: any, Chest: any, Gaera: any,
    Shalwar: any, Poncha: any, Moda: any, Kf: any, Pocket: any,
}
