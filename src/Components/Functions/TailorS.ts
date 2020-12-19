export function signInR(tailor: any) {
    return {
        type: "Add_Tailor",
        tailor
    }
}
export function signOutR() {
    return {
        type: "Delete_Tailor"
    }
}
