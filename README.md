# Lunch Bot App - Draft
**Note:** This app is still under development 

## 1. Install

Do the following:

```
npm install
yarn add react-native-vector-icons
yarn add @react-navigation/stack
yarn add @react-navigation/native
yarn add react-native-linear-gradient
```
(optional) If you encounter errors try resetting the package manager cache:
react-native start --reset-cache

### iOS Applications only

Change the directory into the `ios` folder and run the following command to install the SDK pod with [CocoaPods](https://cocoapods.org/):

```bash
cd ios
pod install
```

You should see the `A0Auth0` pod being installed and linked to the sample app.

### Android applications only

Open the `android/app/src/main/AndroidManifest.xml` file and locate the Intent Filter declaration. You must update the `android:host` property to use your Auth0 Domain from the step above.

```xml
<data
  android:host="{YOUR_DOMAIN}"
  android:pathPrefix="/android/${applicationId}/callback"
  android:scheme="${applicationId}" />
```

The `applicationId` will get auto-completed dynamically.

## 2. Configure Firebase



## 3. Run The App

Run your app on an emulator, simulator, or your own connected device.

- To run the app on iOS run `yarn run ios` or `react-native run-ios`.
- To run the app on Android run `yarn run android` or `react-native run-ios`.
- CLI error with linking of react-native vector icons is pretty common, just ignore it.

The first run may take a while to fully launch. Keep an eye out for confirmation windows and watch the terminal for output and results. 
**Note:** If you get an error about "No bundle URL present" try clicking reload in the app or running `yarn run ios` again. 
