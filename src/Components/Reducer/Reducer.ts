export const initialState: stateType = {
    Tailor: [],
    Customers: ["صارف"],
    Client: [],
    Measurments: [],
}
type stateType = {
    Tailor: any[],
    Customers: any[],
    Client: any[],
    Measurments: [],
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
        default:
            return state
    }
}

