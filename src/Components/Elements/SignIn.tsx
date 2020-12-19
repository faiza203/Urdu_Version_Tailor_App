import firebase from 'firebase';
import { useDispatch } from 'react-redux';
import { signInR } from './../Functions';

export function SignIn() {
    const dispatch = useDispatch();
    const auth = firebase.auth();
    const SignInFun = (e: any) => {
        e.preventDefault();
        const [emailInput, passwordInput] = e.target;
        const [email, password] = [emailInput.value, passwordInput.value];
        auth.signInWithEmailAndPassword(email, password).then((user) => {
            const [userName, id] = [user.user?.email, user.user?.uid]
            dispatch(signInR(userName, id));
            alert("Yes")
        }).catch((err) => alert(err.message))
    }
    return (
        <div className="main">
            <form className="form" onSubmit={SignInFun}>
                <label>: ای میل  </label>
                <input type="email" placeholder="یہاں ای میل لکھیں" required />
                <label >: پاس ورڈ   </label>
                <input type="password" placeholder="یہاں پاس ورڈ درج کریں" required />
                <button type="submit">سائن ان</button>
            </form >
        </div>
    )
}