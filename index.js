/**
 * @format
 */
import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import App from './src/App';
import { NavigationContainer} from '@react-navigation/native';
import {name as appName} from './src/app.json';

AppRegistry.registerComponent(appName, () => App);
