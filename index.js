/**
 * @format
 */

import {AppRegistry} from 'react-native';
import 'react-native-gesture-handler';
import { enableScreens } from 'react-native-screens';
import App from './App';
import {name as appName} from './app.json';
if (!__DEV__) {
	console.log = () => {};
	console.time = () => {};
	console.timeLog = () => {};
	console.timeEnd = () => {};
	console.warn = () => {};
	console.count = () => {};
	console.countReset = () => {};
	console.error = () => {};
	console.info = () => {};
}
enableScreens();
AppRegistry.registerComponent(appName, () => App);
