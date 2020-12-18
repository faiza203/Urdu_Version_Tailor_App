import { findAllByDisplayValue } from '@testing-library/react';
import firebase from 'firebase';
import { config } from './../firebase';
config();

const auth = firebase.auth();
export const SignUpFun = (e: any) => {
    e.preventDefault();
    const [emailInput, passwordInput, confirmPasswordInput] = e.target;
    const [email, password, confirmPassword] = [emailInput.value, passwordInput.value, confirmPasswordInput.value];
    if (password !== confirmPassword) {
        alert("Your password does not matched")
    } else if (email === password) {
        alert("Your have write email as password")
    } else {
        auth.createUserWithEmailAndPassword(email, password).then((user) => { console.log(user) }).catch((err) => alert(err.message))
    }
}