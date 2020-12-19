import { useDispatch, useSelector } from 'react-redux';
import { history } from '../history';
import { Customers } from './index'
import { checkCustomer } from './../Functions';

export function DashBoard() {
    const state = useSelector((state: any) => state);
    const dispatch = useDispatch();
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
