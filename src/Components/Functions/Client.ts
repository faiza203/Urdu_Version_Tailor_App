export const addClientR = (customer: any) => {
    return {
        type: "Add_Client",
        customer
    }
}

export const deleteClientR = () => {
    return {
        type: "Delete_Client",
    }
}