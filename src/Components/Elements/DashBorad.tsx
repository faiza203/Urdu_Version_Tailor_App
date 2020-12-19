import { useDispatch, useSelector } from 'react-redux';
import { history } from './../history';

export function DashBoard() {
    const state = useSelector((state: any) => state);
    return (
        <div>
            {
                state.tailors[0] ?
                    <div className="text-right">
                        <h1 className="h1 font-italic text-muted text-center">
                            {state.tailors[0]}
                        </h1>
                        <form className=" text-center">
                            <input className="d-inline " type="text" placeholder="Add Customer Name Here" required />
                            <button className="btn btn-outline-secondary d-inline mt-1 w-50">Add customer
            </button>
                        </form>
                    </div>
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
    )
}
