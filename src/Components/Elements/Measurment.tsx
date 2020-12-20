import { useSelector } from 'react-redux';
import { history } from './../history';

export function Measurment() {
    const state = useSelector((state: any) => state);
    return (<div>
        {
            state.Tailor[0] ?
                <div className="measurment text-center">
                    <h1 className="h1 text-muted">پیمائش</h1>
                    <form className="mr-5 ">
                        <div className="EditM"></div>
                        <input className="form-control" type="number" placeholder="لمبائی" required />
                        <input className="form-control mt-1" type="number" placeholder="چوڑائی" required />
                        <input className="form-control mt-1" type="number" placeholder="گردن" required />
                        <div className="EditM"></div>
                        <input className="form-control mt-1" type="number" placeholder="تیرا" required />
                        <input className="form-control mt-1" type="number" placeholder="کندھا" required />
                        <input className="form-control mt-1" type="number" placeholder="بازو" required />
                        <div className="EditM"></div>
                        <button className="btn btn-outline-danger d-inline w-50 mr-3" type="button" onClick={() => { history.push("/DashBoard"); history.replace('/DashBoard') }}>منسوخ</button>
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
