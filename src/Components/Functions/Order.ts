import firebase from 'firebase';

export function checkOrderFirebase(client: any, orders: string, state: any, dispatch: any) {
    const arr = [];
    if (state.Order.length > 0) {
        state.Order.forEach((customer: any) => {
            if (client !== undefined) {
                if (customer[0] !== client) {
                    arr.push("yes");
                }
            }
        })
    }
    if (arr.length === state.Order.length) {
        checkOrder(client, orders, state, dispatch,)
    }
}

export function checkOrder(client: any, orders: string, state: any, dispatch: any) {
    const arr = [];
    if (state.Order.length > 0) {
        state.Order.forEach((customer: any, index: number) => {
            if (customer[0].toUpperCase() === client.toUpperCase()) {
                const order: number = parseInt(customer[1]) + parseInt(orders);
                dispatch(updateOrder(state.Client, index, order, state.Tailor[0]));
            } else {
                arr.push("yes");
            }
        })
        if (arr.length === state.Order.length) {
            dispatch(addOrder(client, orders, state.Tailor[0]));
        }
    }
    if (state.Order.length === 0) {
        dispatch(addOrder(client, orders, state.Tailor[0]));
    }
}
export function addOrder(client: any, orders: string, tailor: string) {
    firebase.firestore().collection('Orders').doc(tailor).collection(client + " Orders").doc(`{ ConditionId: ${client} Condition }`).set({
        Orders: parseInt(orders)
    }).then().catch();
    const order = parseInt(orders);
    return {
        type: "Add_Order",
        orders: order,
        client
    }
}
export function updateOrder(client: any, index: any, orders: any, tailor: any) {
    firebase.firestore().collection('Orders').doc(tailor).collection(client + " Orders").doc(`{ ConditionId: ${client} Condition }`).set({
        Orders: parseInt(orders)
    }).then().catch();
    return {
        type: "Update_Order",
        orders,
        index
    }
}

