import firebase from 'firebase';

export function checkOrderFirebase(orders: string, state: any, dispatch: any) {
    const arr = [];
    if (state.Order.length > 0) {
        state.Order.forEach((customer: any) => {
            if (state.Client[0] !== undefined) {
                if (customer[0] !== state.Client[0]) {
                    arr.push("yes");
                }
            }
        })
    }
    if (arr.length === state.Order.length) {
        checkOrder(orders, state, dispatch,)
    }
}

export function checkOrder(orders: string, state: any, dispatch: any) {
    const arr = [];
    if (state.Order.length > 0) {
        state.Order.forEach((customer: any, index: number) => {
            if (customer[0] === state.Client[0]) {
                const order: number = parseInt(customer[1]) + parseInt(orders);
                dispatch(updateOrder(state.Client[0], index, order, state.Tailor[0]));
            } else {
                arr.push("yes");
            }
        })
        if (arr.length === state.Order.length) {
            dispatch(addOrder(state.Client[0], orders, state.Tailor[0]));
        }
    }
    if (state.Order.length === 0) {
        dispatch(addOrder(state.Client[0], orders, state.Tailor[0]));
    }
}
export function addOrder(client: any, orders: string, tailor: string) {
    firebase.firestore().collection('Orders').doc(tailor).collection(client).doc(orders).set({
        ConditionId: client + parseInt(orders)
    }).then().catch();
    const order = parseInt(orders);
    return {
        type: "Add_Order",
        orders: order,
        client
    }
}
export function updateOrder(client: any, index: any, orders: any, tailor: any) {
    firebase.firestore().collection('Orders').doc(tailor).collection(client).doc(orders).set({
        ConditionId: client + " Orders"
    }).then().catch();
    return {
        type: "Update_Order",
        orders,
        index,
        client
    }
}

