import firebase from 'firebase';

export function checkCustomerFirebase(client: any, state: any, dispatch: any) {
    const arr = [];
    if (state.Customers.length > 0) {
        state.Customers.forEach((customer: any) => {
            if (customer.toUpperCase() !== client.toUpperCase()) {
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
            if (customer.toUpperCase() !== client.toUpperCase()) {
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
    const promise = firebase.firestore().collection('Customers').doc(id).collection("Customer Name").doc(customer).set({
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
export const deleteCustomer = (client: any, state: any) => {
    let customerIndex = 0;
    let measurmentIndex = 0;
    let orderIndex = 0;
    let conditionIndex = 0;
    state.Customers.forEach((customer: any, index: number) => {
        if (client === customer) {
            customerIndex = index;
        }
    })
    state.Measurment.forEach((customer: any[], index: number) => {
        if (client === customer[0]) {
            measurmentIndex = index;
        }
    })
    state.Order.forEach((customer: any[], index: number) => {
        if (client === customer[0]) {
            orderIndex = index;
        }
    })
    state.Condition.forEach((customer: any[], index: number) => {
        if (client === customer[0]) {
            conditionIndex = index;
        }
    })
    return {
        type: "Delete_Customer",
        customerIndex,
        measurmentIndex,
        orderIndex,
        conditionIndex
    }

}

export const deleteFromFirebase = (customer: any, dispatch: any, state: any) => {
    const tailor = state.Tailor[0];
    const tailorId = state.Tailor[1];
    firebase.firestore().collection('Customers').doc(tailorId).collection("Customer Name").doc(customer).
        delete();
    firebase.firestore().collection('Measurments').doc(tailor).collection(customer + " Order").doc(customer).
        delete();
    firebase.firestore().collection('Orders').doc(tailor).collection(customer + " Condition").doc(customer).
        delete();
    firebase.firestore().collection('Conditions').doc(tailor).collection("Condition").doc(customer).
        delete();
    dispatch(deleteCustomer(customer, state))
}




