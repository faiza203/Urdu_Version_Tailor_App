export const initialState: stateType = {
    tailors: []
}
type stateType = {
    tailors: any[],
}

export default function Reducer(state: any = initialState, action: any) {
    switch (action.type) {
        case "Add_Tailor":
            return {
                ...state,
                Tailor: state.tailors[0] = (action.tailor)
            }
        default:
            return state
    }
}

