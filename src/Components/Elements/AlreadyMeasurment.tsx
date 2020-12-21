import { useSelector, useDispatch } from 'react-redux';
import firebase from 'firebase';
import { history } from './../history';
import { deleteClientR } from './../Functions';

export function AlreadyMeasurment(props: any) {
    const customerState = useSelector((state: any) => state);
    const tailor: any = customerState.tailors[0];
    const client: any = customerState.customer[0];
    const dispatch = useDispatch();
    const saveMeasurment: any = (e: any) => {
        e.preventDefault();

        const [Length, Width, Neck, Chest, Waist, Bust, ArmLenght, ShoulderLenght, LegLenght] = e.target;
        const measurmentEle = {
            Length: Length.value, Width: Width.value, Chest: Chest.value, Bust: Bust.value, Waist: Waist.value, Neck: Neck.value, ArmLenght: ArmLenght.value, Shoulder: ShoulderLenght.value, LegLenght: LegLenght.value,
        }
        firebase.database().ref().on("child_added", snap => {
            const promise = firebase.firestore().collection('Measurment').doc(tailor).collection("Customers").doc(client).set({
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
        <div >
            {customerState.tailors.length > 0 ?
                customerState.measurment.map((measurment: any, index: number) => {
                    if (measurment[0] === client) {
                        return (<div key={index} className="mr-5">
                            <ul key={index + 10} className="measurment">
                                <li key={index + 1} className="text-muted"> Length : {measurment[1].Length}</li>
                                <li key={index + 2} className="text-muted"> Width : {measurment[1].Width}</li>
                                <li key={index + 3} className="text-muted"> Neck : {measurment[1].Neck}</li>
                                <li key={index + 4} className="text-muted"> Waist : {measurment[1].Waist}</li>
                                <li key={index + 5} className="text-muted"> Bust : {measurment[1].Bust}</li>
                                <li key={index + 6} className="text-muted"> Chest : {measurment[1].Chest}</li>
                                <li key={index + 7} className="text-muted"> Arm Lenght : {measurment[1].ArmLenght}</li>
                                <li key={index + 8} className="text-muted"> Shoulder Length : {measurment[1].Shoulder}</li>
                                <li key={index + 9} className="text-muted"> Leg Lenght : {measurment[1].LegLenght}</li>
                            </ul>
                            <button className="btn btn-outline-danger" onClick={() => {
                                history.push('/EditMeasurment')
                                history.replace('/EditMeasurment');
                            }} >Edit</button>
                            <button className="btn btn-outline-success" onClick={() => {
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