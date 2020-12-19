import { useDispatch, useSelector } from 'react-redux';
import firsbase from 'firebase';
import { checkCustomerFirebase } from '../Functions';
import { history } from './../history';

export const Customers = (props: any) => {
    const state = useSelector((state: any) => state);
    const dispatch = useDispatch();
    firsbase.firestore().collection("Customers").doc(state.Tailor[1]).collection("Customer Name")
        .get()
        .then((Data) => {
            Data.forEach((clientData) => {
                const client = clientData.id;
                checkCustomerFirebase(client, state, dispatch)
            })
        })
    return (
        <div className="text-left">
            {state.Customers.map((Customer: any, index: number) => {
                return (
                    <div className="mt-1  text-left ml-5" key={index}>
                        <button className="btn btn-outline-primary d-inline m-1 ml-5" onClick={() => {
                        }}>ڈیلیٹ                        </button>
                        <button className="btn btn-outline-danger d-inline m-1" onClick={() => {
                        }}>آرڈر</button>
                        <button className="btn btn-outline-success d-inline m-2 " onClick={() => {
                            history.push("/Measurment")
                            history.replace("/Measurment")
                        }}>پیمائش                </button>
                        <h3 className="h3 text-muted d-inline mt-2">{Customer}</h3>
                    </div>
                )
            })}
        </div>
    );
};
