import firebase from 'firebase';

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
