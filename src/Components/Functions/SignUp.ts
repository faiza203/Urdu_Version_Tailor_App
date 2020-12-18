import firebase from 'firebase';
import { config } from './../firebase';
config();

export const SignUpFun = (e: any) => {
    e.preventDefault();
    console.log(firebase.auth());
}