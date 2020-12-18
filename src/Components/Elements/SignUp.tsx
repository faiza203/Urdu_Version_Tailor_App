import { SignUpFun } from './../Functions';

export function SignUp() {
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
