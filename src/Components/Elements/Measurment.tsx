import { useSelector } from 'react-redux';
import { AddMeasurment, AlreadyMeasurment } from './index'
export function Measurment() {
    const state = useSelector((state: any) => state);
    let arr = [];
    return (
        <div>
            {state.Measurment.length > 0 ?
                state.Measurment.map((measurment: any[], index: number) => {
                    if (measurment[0] === state.Client) {
                        return (<AlreadyMeasurment />)
                    } else { arr.push("yes") }
                    console.log(state.Client , measurment);

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
