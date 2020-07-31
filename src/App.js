// App.js
// navigation
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
// import the different screens
import LoadingScreen from './screens/auth/Loading';
import SignUpScreen from './screens/auth/SignUp';
import LoginScreen from './screens/auth/Login';
import LoggedOutScreen from './screens/auth/LoggedOut';
import ForgotPassScreen from './screens/auth/ForgotPass';
import MainScreen from './screens/Main';

// create our app's navigation stack
const App = createSwitchNavigator(
  {
    Loading: LoadingScreen,
    SignUp: SignUpScreen,
    Login: LoginScreen,
    Main: MainScreen,
    ForgotPass: ForgotPassScreen,
  },
  {
    initialRouteName: 'Loading',
  }
)
export default createAppContainer(App);