import { useDispatch } from 'react-redux';
import firebase from 'firebase';
import { signInR } from './../Functions'
import { config } from './../firebase';
config();

export function SignUp() {
    const dispatch = useDispatch();
    const auth = firebase.auth();
    const SignUpFun = (e: any) => {
        e.preventDefault();
        const [emailInput, passwordInput, confirmPasswordInput] = e.target;
        const [email, password, confirmPassword] = [emailInput.value, passwordInput.value, confirmPasswordInput.value];
        if (password !== confirmPassword) {
            alert("Your password does not matched")
        } else if (email === password) {
            alert("Your have write email as password")
        } else {
            auth.createUserWithEmailAndPassword(email, password).then((user) => {
                dispatch(signInR(user.user?.email))
            }).catch((err) => alert(err.message))
        }
    }
    return (
        <div className="main">
            <form className="form" onSubmit={SignUpFun}>
                <h2>رجسٹریشن</h2>
                <label>: ای میل  </label>
                <input type="email" placeholder="یہاں ای میل لکھیں" required />
                <label >: پاس ورڈ   </label>
                <input type="password" placeholder="یہاں پاس ورڈ درج کریں" required />
                <label >: پاس ورڈ پھر لکھیں </label>
                <input type="password" placeholder="یہاں پاس ورڈ درج کریں" required />
                <button type="submit">سائن اپ</button>
            </form>
        </div>
    )
}
