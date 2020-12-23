import { useDispatch, useSelector } from 'react-redux';
import { history } from '../history';
import { Customers } from './index'
import { checkCustomer, checkFirebaseCondition, checkFirebaseMeasurment, checkOrderFirebase } from './../Functions';
import firebase from 'firebase';

export function DashBoard() {
    const state = useSelector((state: any) => state);
    const dispatch = useDispatch();
    state.Customers.forEach((customer: any) => {
        firebase.firestore().collection('Measurments').doc(state.Tailor[0]).collection(customer + " Measurment").get()
            .then((information) => {
                information.docs.forEach((doc) => {
                    const measurment = doc.data().measurment;
                    checkFirebaseMeasurment(customer, measurment, dispatch, state.Measurment)
                });
            })
        firebase.firestore().collection('Orders').doc(state.Tailor[0]).collection(customer + " Orders").get()
            .then((information) => {
                information.docs.forEach((doc) => {
                    const order = doc.data().Orders
                    checkOrderFirebase(customer, order, state, dispatch)
                });
            })
        firebase.firestore().collection('Conditions').doc(state.Tailor[0]).collection(customer + " Condition").get()
            .then((information) => {
                information.docs.forEach((doc) => {
                    const condition = doc.data().condition;
                    checkFirebaseCondition(state.Tailor[0], customer, condition, dispatch, state.Condition)
                });
            })
    })
    const addCustomer = (e: any) => {
        e.preventDefault();
        const customer = e.target[0].value;
        customer.trim() === "" ? alert("کسٹمر کا نام لکھیں") : checkCustomer(customer.trim(), state, dispatch);
        e.target[0].value = '';
    }
    return (
        <div className="DashBoard">
            {
                state.Tailor[0] ?
                    <div className="text-right">
                        <h1 className="h1 font-italic text-muted text-center">
                            {state.Tailor[0]}
                        </h1>
                        <form className=" text-center" onSubmit={addCustomer}>
                            <input className="d-inline " type="text" placeholder="یہاں گاہک کا نام لکھیں" required />
                            <button className="btn btn-outline-secondary d-inline mt-1 w-50">گاہک شامل کریں
            </button>
                        </form>
                        <Customers />
                    </div>
                    :
                    <div>
                        <h1 className="h1 font-italic text-muted">
                            پہلے سائن ان کریں
                         </h1>
                        <button className="btn btn-outline-danger mt-1 mr-3" onClick={
                            () => {
                                history.push('/SignIn')
                                history.replace('/SignIn')
                            }
                        }>
                            سائن ان
                         </button>
                        <button className="btn btn-outline-success mt-1 " onClick={
                            () => {
                                history.push('/SignUp')
                                history.replace('/SignUp')
                            }
                        }>
                            سائن اپ
                         </button>
                    </div>
            }
        </div>
    )
}
