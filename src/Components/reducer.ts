export const initialState: stateType = {
    Tailor: [],
    Customers: [],
    Client: [],
    Measurment: [],
    Order: [],
    Condition: []
}
type stateType = {
    Tailor: any[],
    Customers: any[],
    Client: any[],
    Measurment: [],
    Order: any[],
    Condition: any[]
}

export function Reducer(state: any = initialState, action: any) {
    switch (action.type) {
        case "Add_Tailor":
            return {
                ...state,
                Tailor: state.Tailor = ([action.tailor, action.id])
            }
        case "Add_Customer":
            return {
                ...state,
                Customer: state.Customers.push(action.customer)
            }
        case "Delete_Customer":
            return {
                ...state,
                Customer: state.Customers.splice(action.customerIndex, 1),
                Measurments: state.Measurment.splice(action.measurmentIndex, 1),
                Orders: state.Order.splice(action.orderIndex, 1),
                Conditions: state.Condition.splice(action.conditionIndex, 1),
            }
        case "Add_Client":
            return {
                ...state,
                Client: state.Client[0] = action.customer
            }
        case "Delete_Client":
            return {
                ...state,
                Client: state.Client = []
            }
        case "Add_Measurment":
            return {
                ...state,
                Measurments: state.Measurment.push([action.client, action.measurment]),
            }
        case "Update_Measurment":
            return {
                ...state,
                Measurments: state.Measurment[action.index][1] = (action.measurment),
            }
        case "Add_Order":
            return {
                ...state,
                Orders: state.Order.push([action.client, action.orders]),
            }
        case "Update_Order":
            return {
                ...state,
                Orders: state.Order[action.index][1] = action.orders,
            }

        case "Add_Condition":
            return {
                ...state,
                Conditions: state.Condition.push([action.client, action.condition]),
            }
        case "Update_Condition":
            return {
                ...state,
                Conditions: state.Condition[action.index][1] = action.condition,
            }
        default:
            return state
    }
}

