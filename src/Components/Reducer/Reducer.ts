export const initialState: stateType = {
    Tailor: []
}
type stateType = {
    Tailor: any[],
}

export function Reducer(state: any = initialState, action: any) {
    switch (action.type) {
        case "Add_Tailor":
            return {
                ...state,
                Tailor: state.Tailor = ([action.tailor, action.id])
            }
        default:
            return state
    }
}

