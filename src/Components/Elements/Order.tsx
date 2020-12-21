import { useSelector, useDispatch } from 'react-redux';
import { Condition, AlreadyCondition } from './index';
import { deleteClientR, checkOrder } from './../Functions';
import { history } from './../history';

export const AddOrder = () => {
    const state = useSelector((state: any) => state);
    const dispatch = useDispatch();
    const saveOrder = (e: any) => {
        e.preventDefault();
        const [order] = e.target;
        // const order = e.target[0].value;
        if (order.value > 0) {
            checkOrder(state.Client[0], order.value, state, dispatch);
        }

    }
    return (
        <div className="text-center">
            {
                state.Tailor[0] ?
                    <form className="text-center" onSubmit={saveOrder}>
                        <div className="detail text-right">
                            <div>
                                <div className=" ml-5">
                                    <h1 className="h1 text-muted">آرڈر</h1>
                                    <p className="text-muted">: اگر آپ نیا لباس سلائی کروانا چاہتے ہیں </p>
                                    <input className="d-inline" type="number" placeholder="آرڈر شامل کریں" />
                                    {state.Order.length > 0 ?
                                        state.Order.map((order: any[], index: number) => {
                                            if (order[0].toUpperCase() === state.Client[0].toUpperCase()) {
                                                return (
                                                    <h3 key={index} className="text-muted mt-1">
                                                        پہلے{order[1]} آرڈر موجود ہیں </h3>
                                                )
                                            }
                                        }) :
                                        null
                                    }
                                </div>
                            </div>
                            {state.Order.length > 0 ?
                                state.Order.map((order: any[], index: number) => {
                                    if (order[0].toUpperCase() === state.Client[0].toUpperCase()) {
                                        // return (
                                        //     <div>
                                        //         <AlreadyCondition client={index} key={index} />
                                        //     </div>
                                        // )
                                    }
                                }) :
                                null
                            }
                            {state.Order.length > 0 ?
                                state.Order.map((order: any[], index: number) => {
                                    if (order[0].toUpperCase() === state.Client[0].toUpperCase()) {
                                        return (
                                            <div>
                                                <Condition key={index} />
                                            </div>
                                        )
                                    }
                                }) :
                                null
                            }
                        </div>
                        <button className="btn btn-outline-success w-25 d-inline"
                            onClick={() => {
                                history.push("/DashBoard");
                                history.replace('/DashBoard');
                                dispatch(deleteClientR());
                            }}
                        >منسوخ</button>
                        <button className="btn btn-outline-danger ml-3 d-inline w-25" type="submit">جمع</button>
                    </form>
                    : <div>
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
        </div >
    )
}