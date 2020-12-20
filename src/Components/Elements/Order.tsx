import { useSelector } from 'react-redux';
import { Condition } from './index';

export const AddOrder = () => {
    const state = useSelector((state: any) => state);
    return (<div className="text-right">
        <h1 className="h1 text-muted">آرڈر</h1>
        <p className="text-muted">: اگر آپ نیا لباس سلائی کرنا چاہتے ہیں </p>
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
        <Condition />
    </div>)
}