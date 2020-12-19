import firebase from 'firebase';

export function checkCustomerFirebase(client: any, state: any, dispatch: any) {
    const arr = [];
    if (state.Customers.length > 0) {
        state.Customers.forEach((customer: any) => {
            if (customer !== client) {
                arr.push("yes");
            }
        })
    }
    if (arr.length === state.Customers.length) {
        checkCustomer(client, state, dispatch);
    }
}


export const checkCustomer = (client: any, state: any, dispatch: any) => {
    let arr = [];
    if (state.Customers.length > 0) {
        state.Customers.forEach((customer: any) => {
            if (customer !== client) {
                arr.push("yes");
            }
        })
    }
    if (arr.length === state.Customers.length) {
        dispatch(addCustomerR(client, state.Tailor[1]))
    }
    else {
        alert("You have already this user")
    }
}


export function addCustomerR(customer: any, id: any) {
    const promise = firebase.firestore().collection('Customers').doc(id).collection(customer).doc("Measurment").set({
        Id: customer + " " + "Measurment"
    })
    promise.then(() => {
    })
    promise.catch((err) => {
        alert(err.message)
    })
    return {
        type: "Add_Customer",
        customer,
    }
}
