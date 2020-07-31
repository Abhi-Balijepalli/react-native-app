// gmail sign in
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-community/google-signin';
import WEB_CLIENT_ID from '../../Data/FirebaseGoogleConfig.json';

export default async function GoogleAuth() {
    // configure gmail sign in
    GoogleSignin.configure(WEB_CLIENT_ID);

    // user id token
    const { idToken } = await GoogleSignin.signIn();

    // gmail credential
    const gmailCrendential = auth.GoogleAuthProvider.credential(idToken);

    // login
    auth().signInWithCredential(gmailCrendential);

}