import firebase from 'firebase';

export function signInR(tailor: any, id: any) {
    firebase.firestore().collection("Tailors").doc(tailor).set({
        CustomersId: id
    }).catch((err: any) => {
        alert(err.meassage);
    })
    return {
        type: "Add_Tailor",
        tailor,
        id
    }
}
export function signOutR() {
    return {
        type: "Delete_Tailor"
    }
}
