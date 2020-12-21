import { useSelector, useDispatch } from 'react-redux';
import { checkMeasurment, deleteClientR } from './../Functions';
import { history } from './../history';
import firebase from 'firebase';

export function EditMeasurment() {
    const state = useSelector((state: any) => state);
    const dispatch = useDispatch();
    const saveMeasurment: any = (e: any) => {
        e.preventDefault();
        let previousMeasurment;
        const [Length, Width, Neck, Chest, Waist, Bust, ArmLenght, ShoulderLenght, LegLenght] = e.target;
        state.measurment.map((measurment: any, index: number) => {
            if (measurment[0] === state.Client[0]) {
                previousMeasurment = measurment[1];
                const measurmentEle = {
                    Length: Length.value > 0 ? Length.value : previousMeasurment.Length, Width: Width.value > 0 ? Width.value : previousMeasurment.Width, Chest: Chest.value > 0 ? Chest.value : previousMeasurment.Chest, Bust: Bust.value > 0 ? Bust.value : previousMeasurment.Bust, Waist: Waist.value > 0 ? Waist.value : previousMeasurment.Waist, Neck: Neck.value > 0 ? Neck.value : previousMeasurment.Neck, ArmLenght: ArmLenght.value > 0 ? ArmLenght.value : previousMeasurment.ArmLenght, Shoulder: ShoulderLenght.value > 0 ? ShoulderLenght.value : previousMeasurment.Shoulder, LegLenght: LegLenght.value > 0 ? LegLenght.value : previousMeasurment.LegLenght,
                };
                const promise = firebase.firestore().collection('Measurments').doc(state.Tailor[0]).collection("Customer").doc(state.Client[0]).set({
                    measurmentEle
                });
                promise.then(() => {
                    checkMeasurment(state.Client[0], measurmentEle, dispatch, state.measurment);
                    history.push("/Measurment");
                    history.replace("/Measurment");
                    dispatch(deleteClientR());
                })
                promise.catch((err) => {
                    alert(err.message);
                    dispatch(deleteClientR());
                })
            }

        });
    }





    return (
        <div >
            <div className="mr-5">
                {state.measurment.length > 0 ?
                    state.measurment.map((measurment: any, index: number) => {
                        if (measurment[0] === state.Client[0]) {
                            return (
                                <div id="editM">
                                    <form onSubmit={saveMeasurment} key={index}>
                                        <div className="EditM">
                                            <div>
                                                <label>Length</label>
                                                <input className="mt-1" type="number" placeholder={measurment[1].Length} />
                                            </div>
                                            <div>
                                                <label>Width</label>
                                                <input className="mt-1" type="number" placeholder={measurment[1].Width} />
                                            </div>
                                            <div> <label>Chest</label>
                                                <input className="mt-1" type="number" placeholder={measurment[1].Chest} />
                                            </div>
                                        </div>
                                        <div className="EditM">
                                            <div>
                                                <label>Waist</label>
                                                <input className="mt-1" type="number" placeholder={measurment[1].Waist} />
                                            </div>
                                            <div>
                                                <label>Bust</label>
                                                <input className="mt-1" type="number" placeholder={measurment[1].Bust} />
                                            </div>
                                            <div>
                                                <label>Arm</label>
                                                <input className="mt-1" type="number" placeholder={measurment[1].ArmLenght} />
                                            </div>
                                        </div>
                                        <div className="EditM">
                                            <div>
                                                <label>Shoulder</label>
                                                <input className="mt-1" type="number" placeholder={measurment[1].Shoulder} />
                                            </div>
                                            <div>
                                                <label>Neck</label>
                                                <input className="mt-1" type="number" placeholder={measurment[1].Neck} />
                                            </div>
                                            <div>
                                                <label>Leg Length</label>
                                                <input className="mt-1" type="number" placeholder={measurment[1].LegLenght} />
                                            </div>
                                        </div>
                                        <button className="btn btn-outline-success d-inline m-0 mt-1 w-25" type="submit">Edit Measurment</button>
                                        <button className="btn btn-outline-danger d-inline m-0 mt-1 ml-1 w-25" onClick={() => {
                                            history.push("/Measurment"); history.replace('/Measurment')
                                            dispatch(deleteClientR());
                                        }}>Cancle</button>
                                    </form>
                                </div>
                            )
                        }
                    })
                    :
                    <div>
                        <h1 className="h1 font-italic text-muted">
                            Please login first
                             </h1>
                        <button className="btn btn-outline-danger" onClick={
                            () => {
                                history.push('/SignIn')
                                history.replace('/SignIn')
                            }
                        }>
                            Go to Sign In
                             </button>
                        <button className="btn btn-outline-success" onClick={
                            () => {
                                history.push('/SignUp')
                                history.replace('/SignUp')
                            }
                        }>
                            Go to Sign Up
                             </button>
                    </div>
                }
            </div>
        </div >
    )
}


