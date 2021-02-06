import { useSelector, useDispatch } from 'react-redux';
import { checkMeasurment, deleteClientR } from './../Functions';
import { history } from './../history';
import firebase from 'firebase';

export function EditMeasurment() {
    const state = useSelector((state: any) => state);
    const dispatch = useDispatch();
    const saveMeasurment: any = (e: any) => {
        e.preventDefault();
        let PM;
        const [Length, ArmLenght, Tera, Neck, Chest, gaera, Shalwar, poncha, moda, kf, pocket] = e.target;
        state.Measurment.map((measurment: any, index: number) => {
            if (measurment[0] === state.Client) {
                PM = measurment[1];
                const measurmentEle = {
                    Length: Length.value > 0 ? Length.value : PM.Length,
                    Arm: ArmLenght.value > 0 ? ArmLenght.value : PM.Arm,
                    Tera: Tera.value > 0 ? Tera.value : PM.Tera,
                    Neck: Neck.value > 0 ? Neck.value : PM.Neck,
                    Chest: Chest.value > 0 ? Chest.value : PM.Chest,
                    Gaera: gaera.value > 0 ? gaera.value : PM.Gaera,
                    Shalwar: Shalwar.value > 0 ? Shalwar.value : PM.Shalwar,
                    Poncha: poncha.value > 0 ? poncha.value : PM.Poncha,
                    Moda: moda.value > 0 ? moda.value : PM.Moda,
                    Kf: kf.value > 0 ? kf.value : PM.Kf,
                    Pocket: pocket.value > 0 ? pocket.value : PM.Pocket
                };
                const promise = firebase.firestore().collection('Measurments').doc(state.Tailor[0]).collection(state.Client + " Measurment").doc("{ OrdersId " + ": " + state.Client + " Orders }").set({
                    measurmentEle
                });
                promise.then(() => {
                    checkMeasurment(state.Client, measurmentEle, dispatch, state.Measurment);
                    history.push("/Measurment");
                    history.replace("/Measurment");
                })
                promise.catch((err) => {
                    alert(err.message);
                })
            }
        });
    }
    return (
        <div className="text-center" >
            <div>
                {state.Measurment.length > 0 ?
                    state.Measurment.map((measurment: any, index: number) => {
                        if (measurment[0] === state.Client) {
                            return (
                                <div id="editM" key={index} className="text-center">
                                    <form onSubmit={saveMeasurment} key={index} className="text-center">
                                        <div className="EditM text-center">
                                            <div>
                                                <label>لمبائی</label>
                                                <input className="mt-1" type="number" placeholder={measurment[1].Length} />
                                            </div>
                                            <div>
                                                <label>بازو</label>
                                                <input className="mt-1" type="number" placeholder={measurment[1].Arm} />
                                            </div>
                                            <div> <label>تیرا</label>
                                                <input className="mt-1" type="number" placeholder={measurment[1].Tera} />
                                            </div>
                                        </div>
                                        <div className="EditM">
                                            <div>
                                                <label>گلا</label>
                                                <input className="mt-1" type="number" placeholder={measurment[1].Neck} />
                                            </div>
                                            <div>
                                                <label>سینے</label>
                                                <input className="mt-1" type="number" placeholder={measurment[1].Chest} />
                                            </div>
                                            <div>
                                                <label>گیرا</label>
                                                <input className="mt-1" type="number" placeholder={measurment[1].Gaera} />
                                            </div>
                                            <div>
                                                <label>شلوار</label>
                                                <input className="mt-1" type="number" placeholder={measurment[1].Shalwar} />
                                            </div>
                                        </div>
                                        <div className="EditM">
                                            <div className="ml-5">
                                                <label>پونچا</label>
                                                <input className="mt-1" type="number" placeholder={measurment[1].Poncha} />
                                            </div>
                                            <div>
                                                <label>موڈا</label>
                                                <input className="mt-1" type="number" placeholder={measurment[1].Moda} />
                                            </div>
                                            <div>
                                                <label>کف</label>
                                                <input className="mt-1" type="number" placeholder={measurment[1].Kf} />
                                            </div>
                                            <div>
                                                <label>پاکٹ</label>
                                                <input className="mt-1" type="number" placeholder={measurment[1].Pocket} />
                                            </div>
                                        </div>
                                        <div>
                                            <button className="btn btn-outline-success d-inline m-0 mt-1 w-25" type="submit">ترمیم</button>
                                            <button className="btn btn-outline-danger d-inline m-0 mt-1 ml-3 w-25" onClick={() => {
                                                history.push("/Measurment"); history.replace('/Measurment')
                                            }}>کینسل</button>
                                        </div>
                                    </form>
                                </div>
                            )
                        }
                    })
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
        </div >
    )
}


