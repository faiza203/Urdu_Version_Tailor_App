import { history } from './../history';

export function Measurment() {
    // export const AddMeasurment = () => {
    //     const dispatch = useDispatch();
    //     const customerState = useSelector((state: any) => state);
    //     const tailor = customerState.tailors[0];
    //     const client = customerState.customer[0];
    //     const promise = () => {
    //         firebase.firestore().collection('Measurments').doc(tailor).collection("Customer").get()
    //             .then(snapshot => {
    //                 snapshot.docs.forEach(client => {
    //                     const clientName = client.id;
    //                     const measurment = client.data().measurmentEle;
    //                     checkFirebaseMeasurment(clientName, measurment, dispatch, customerState.measurment);
    //                 })
    //             }).catch()
    //     }
    //     promise();

    //     const saveMeasurment: any = (e: any) => {
    //         e.preventDefault();

    //         const [Length, Width, Neck, Chest, Waist, Bust, ArmLenght, ShoulderLenght, LegLenght] = e.target;
    //         const measurmentEle = {
    //             Length: Length.value, Width: Width.value, Chest: Chest.value, Bust: Bust.value, Waist: Waist.value, Neck: Neck.value, ArmLenght: ArmLenght.value, Shoulder: ShoulderLenght.value, LegLenght: LegLenght.value
    //         }
    //         const promise = firebase.firestore().collection('Measurments').doc(tailor).collection("Customer").doc(client).set({
    //             measurmentEle
    //         });
    //         promise.then(() => {
    //             checkMeasurment(client, measurmentEle, dispatch, customerState.measurment);
    //             history.push("/DashBoard");
    //             history.replace("/DashBoard");
    //             dispatch(deleteClient());
    //         })
    //         promise.catch((err) => {
    //             alert(err.message);
    //             dispatch(deleteClient());
    //         })
    //     }

    return (<div>
        <div className="measurment">
            <h1 className="h1 text-muted">Measurment</h1>
            <form className="mr-5 ">
                <div className="EditM"></div>
                <input className="form-control" type="number" placeholder="Length" required />
                <input className="form-control mt-1" type="number" placeholder="Width" required />
                <input className="form-control mt-1" type="number" placeholder="Neck" required />
                <div className="EditM"></div>
                <input className="form-control mt-1" type="number" placeholder="Waist" required />
                <input className="form-control mt-1" type="number" placeholder="Bust" required />
                <input className="form-control mt-1" type="number" placeholder="Arm Width" required />
                <div className="EditM"></div>
                <input className="form-control mt-1" type="number" placeholder="Waist" required />
                <input className="form-control mt-1" type="number" placeholder="Chest" required />
                <input className="form-control mt-1" type="number" placeholder="Shoulder Width" required />
                <button className="btn btn-outline-success d-inline w-25" type="submit">Add</button>
                <button className="btn btn-outline-danger d-inline w-50" type="button" onClick={() => { history.push("/DashBoard"); history.replace('/DashBoard') }}>Cancle</button>
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
    </div>
    )
}
