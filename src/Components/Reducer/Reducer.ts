export const initialState: stateType = {
    Tailor: [],
    Customers: ["صارف"],
}
type stateType = {
    Tailor: any[],
    Customers: any[],
}

export function Reducer(state: any = initialState, action: any) {
    switch (action.type) {
        case "Add_Tailor":
            return {
                ...state,
                Tailor: state.Tailor = ([action.tailor, action.id])
            }
        case "Add_Customer":
            console.log(state);
            return {
                ...state,
                Customer: state.Customers.push(action.customer)
            }
        default:
            return state
    }
}

