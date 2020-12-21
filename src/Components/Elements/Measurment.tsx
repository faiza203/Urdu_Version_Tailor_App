import { useDispatch, useSelector } from 'react-redux';
import { AddMeasurment } from './index'
export function Measurment() {
    const state = useSelector((state: any) => state);
    let arr = [];
    return (
        <div>
            {state.Measurment.length > 0 ?
                state.Measurment.map((measurment: any[], index: number) => {
                    if (measurment[0] === state.Client[0]) {
                        return (<p>Already Measurment</p>)
                    } else { arr.push("yes") }
                })
                : <AddMeasurment />
            }
            { state.Measurment.length > 0 ?
                arr.length === state.Measurment.length ?
                    <AddMeasurment />
                    : null
                : null
            }

        </div>
    )
}
