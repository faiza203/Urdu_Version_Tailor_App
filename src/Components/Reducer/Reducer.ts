export const initialState: stateType = {
    Tailor: [],
    Customers: [],
    Client: [],
    Measurment: [],
    Order: [['Faiza', 5]],
    Condition: [['Faiza',
        {
            Stitch: 5,
            Delivered: 6,
            UnStitch: 7,
            Lost: 8,
            OutOfOrder: 9,
        }]]
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
        case "Add_Client":
            return {
                ...state,
                Customer: state.Client[0] = action.customer
            }
        case "Delete_Client":
            return {
                ...state,
                Customer: state.Client = []
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
                Orders: state.Order[action.index][1] = (action.orders),
            }

        default:
            return state
    }
}

