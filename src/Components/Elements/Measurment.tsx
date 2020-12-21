import { useSelector, useDispatch } from 'react-redux';
import { deleteClientR, checkMeasurment } from '../Functions';
import { history } from './../history';
import firebase from 'firebase';

export function Measurment() {
    const state = useSelector((state: any) => state);
    const dispatch = useDispatch();
    const saveMeasurment = (e: any) => {
        e.preventDefault();
        const [Length, ArmLenght, Tera, Neck, Chest, gaera, Shalwar, poncha, moda, kf, pocket] = e.target;
        const measurment = {
            Length: Length.value, Arm: ArmLenght.value, Tera: Tera.value, Neck: Neck.value, Chest: Chest.value, Gaera: gaera.value,
            Shalwar: Shalwar.value, Poncha: poncha.value, Moda: moda.value, Kf: kf.value, Pocket: pocket.value,
        }
        const promise = firebase.firestore().collection('Measurments').doc(state.Tailor[0]).collection(state.Client[0] + " Measurment").doc("{ OrdersId " + ": " + state.Client[0] + " Orders }").set({
            measurment
        });
        promise.then(() => {
            checkMeasurment(state.Client[0], measurment, dispatch, state.Measurment)
        })
        promise.catch((err) => {
            alert(err.message)
        })
    }
    return (<div>
        {
            state.Tailor[0] ?
                <div className="measurment text-center">
                    <form className="mr-5" onSubmit={saveMeasurment}>
                        <input className="form-control" type="number" placeholder="لمبائی" required />
                        <input className="form-control mt-1" type="number" placeholder="بازو" required />
                        <input className="form-control mt-1" type="number" placeholder="تیرا" required />
                        <input className="form-control mt-1" type="number" placeholder="گلا" required />
                        <input className="form-control mt-1" type="number" placeholder="سینے" required />
                        <input className="form-control mt-1" type="number" placeholder="گیرا" required />
                        <input className="form-control mt-1" type="number" placeholder="شلوار" required />
                        <input className="form-control mt-1" type="number" placeholder="پونچا" required />
                        <input className="form-control mt-1" type="number" placeholder="موڈا" required />
                        <input className="form-control mt-1" type="number" placeholder="کف" required />
                        <input className="form-control mt-1" type="number" placeholder="پاکٹ" required />
                        <button className="btn btn-outline-danger d-inline w-50 mr-3" type="button" onClick={() => {
                            history.push("/DashBoard");
                            history.replace('/DashBoard');
                            dispatch(deleteClientR());
                        }}>منسوخ</button>
                        <button className="btn btn-outline-success d-inline w-25 mr-3 " type="submit">جمع</button>
                    </form>
                </div> :
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
    </div >
    )
}


