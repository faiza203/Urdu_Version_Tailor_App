import { useSelector, useDispatch } from 'react-redux';
import firebase from 'firebase';
import { history } from './../history';
import { deleteClientR } from './../Functions';

export function AlreadyMeasurment(props: any) {
    const state = useSelector((state: any) => state);
    const dispatch = useDispatch();
    const saveMeasurment: any = (e: any) => {
        e.preventDefault();

        const [Length, Width, Neck, Chest, Waist, Bust, ArmLenght, ShoulderLenght, LegLenght] = e.target;
        const measurmentEle = {
            Length: Length.value, Width: Width.value, Chest: Chest.value, Bust: Bust.value, Waist: Waist.value, Neck: Neck.value, ArmLenght: ArmLenght.value, Shoulder: ShoulderLenght.value, LegLenght: LegLenght.value,
        }
        firebase.database().ref().on("child_added", snap => {
            const promise = firebase.firestore().collection('Measurment').doc(state.Tailor[0]).collection("Customers").doc(state.Client[0]).set({
                measurmentEle
            });
            promise.then(() => {
                history.push("/Measurment");
                history.replace("/Measurment");
                dispatch(deleteClientR());
            })
            promise.catch((err) => {
                alert(err.message);
                dispatch(deleteClientR());
            })
        });
    }
    return (
        <div className="text-left">
            {state.Tailor.length > 0 ?
                state.Measurment.map((measurment: any, index: number) => {
                    if (measurment[0] === state.Client[0]) {
                        return (<div key={index} className="mr-5">
                            <ul key={index + 12} className="measurment">
                                <li key={index + 1} className="text-muted"> {measurment[1].Length}: لمبائی</li>
                                <li key={index + 7} className="text-muted"> {measurment[1].Arm} : بازو</li>
                                <li key={index + 2} className="text-muted"> {measurment[1].Tera}: تیرا</li>
                                <li key={index + 3} className="text-muted"> {measurment[1].Neck} : گلا</li>
                                <li key={index + 4} className="text-muted"> {measurment[1].Chest} : سینے</li>
                                <li key={index + 5} className="text-muted"> {measurment[1].Gaera} : گیرا</li>
                                <li key={index + 6} className="text-muted"> {measurment[1].Shalwar} : شلوار</li>
                                <li key={index + 8} className="text-muted"> {measurment[1].Poncha} : پونچا</li>
                                <li key={index + 9} className="text-muted"> {measurment[1].Moda} : موڈا</li>
                                <li key={index + 10} className="text-muted"> {measurment[1].Kf} : کف</li>
                                <li key={index + 11} className="text-muted"> {measurment[1].Pocket} : پاکٹ</li>
                            </ul>
                            <button className="btn btn-outline-danger" onClick={() => {
                                history.push('/EditMeasurment')
                                history.replace('/EditMeasurment');
                            }} >Edit</button>
                            <button className="btn btn-outline-success ml-1" onClick={() => {
                                history.push('/Dashboard')
                                history.replace('/Dashboard');
                                dispatch(deleteClientR());
                            }}
                            >Cancle</button>
                        </div>)
                    }
                }) :
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
    )
}