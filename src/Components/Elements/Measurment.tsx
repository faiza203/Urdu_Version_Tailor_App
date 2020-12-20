import { useSelector, useDispatch } from 'react-redux';
import { deleteClientR } from '../Functions';
import { history } from './../history';
import firebase from 'firebase';

export function Measurment() {
    const state = useSelector((state: any) => state);
    const dispatch = useDispatch();
    const saveMeasurment = (e: any) => {
        e.preventDefault();
        const [Length, Width, Neck, Tera, ArmLenght, ShoulderLenght] = e.target;
        const measurment = {
            لمبائی: Length.value, چوڑائی: Width.value, تیرا: Tera.value, گردن: Neck.value, بازو: ArmLenght.value, کندھا: ShoulderLenght.value,
        }

        const promise = firebase.firestore().collection('Measurments').doc(state.Tailor[0]).collection(state.Client[0]).doc("{ OrdersId " + ": " + state.Client[0] + "Orders }").set({
            measurment
        });
        promise.then(() => {
            alert("Data is updated");
        })
        promise.catch((err) => {
            alert(err.message)
        })
    }
    return (<div>
        {
            state.Tailor[0] ?
                <div className="measurment text-center">
                    <h1 className="h1 text-muted">پیمائش</h1>
                    <form className="mr-5" onSubmit={saveMeasurment}>
                        <input className="form-control" type="number" placeholder="لمبائی" required />
                        <input className="form-control mt-1" type="number" placeholder="چوڑائی" required />
                        <input className="form-control mt-1" type="number" placeholder="گردن" required />
                        <input className="form-control mt-1" type="number" placeholder="تیرا" required />
                        <input className="form-control mt-1" type="number" placeholder="کندھا" required />
                        <input className="form-control mt-1" type="number" placeholder="بازو" required />
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
    </div >
    )
}
