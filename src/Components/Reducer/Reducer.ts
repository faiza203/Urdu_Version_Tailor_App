export const initialState: stateType = {
    Tailor: [],
    Customers: [],
    Client: [],
    Measurment: [],
    Order: [['Faiza' , 5]],
}
type stateType = {
    Tailor: any[],
    Customers: any[],
    Client: any[],
    Measurment: [],
    Order: any[],
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
            console.log(state);

            return {
                ...state,
                Measurments: state.Measurment.push([action.client, action.measurment]),
            }
        case "Update_Measurment":
            return {
                ...state,
                Measurments: state.Measurment[action.index][1] = (action.measurment),
            }

        default:
            return state
    }
}

