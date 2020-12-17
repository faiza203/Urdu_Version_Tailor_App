export function SignUp() {
    return (
        <div className="main">
            <form className="form">
                <h2>رجسٹریشن</h2>
                <label>ای میل :</label>
                <input type="email" placeholder="Please write email here" required />
                <label >پاس ورڈ :</label>
                <input type="password" placeholder="Enter password here" required />
                <label >پاس ورڈ پھر لکھیں :</label>
                <input type="password" placeholder="Rewrite password here" required />
                <button type="submit">سائن اپ</button>
            </form>
        </div>
    )
}
