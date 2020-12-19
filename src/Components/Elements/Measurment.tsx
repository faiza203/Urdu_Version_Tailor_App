import { useSelector } from 'react-redux';
import { history } from './../history';

export function Measurment() {
    const state = useSelector((state: any) => state);
    return (<div>
        {
            state.Tailor[0] ?
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
        }
    </div >
    )
}
