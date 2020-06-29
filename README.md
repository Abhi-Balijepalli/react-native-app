# SAMPLE Login App with auth0, navigation, find nearest location...etc.
**Note:** This app is still under development 

## 1. Install

You need auth0 and react native vector icons. Do the following:

```
yarn add react-native-auth0
yarn add react-native-vector-icons
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

## 2. Configure Auth0

1. Copy the `app/auth0-configuration.js.example` in this sample to `app/auth0-configuration.js`.
2. Open your [Applications in the Auth0 dashboard](https://manage.auth0.com/#/applications).
3. Select your existing Application from the list or click **Create Application** at the top to create a new Application of type **Native**.
4. On the **Settings** tab for the Application, copy the "Client ID" and "Domain" values and paste them into the `app/auth0-credentials.js` file created above.
5. In the **Allowed Callback URLs** field, paste in the text below and replace `YOUR_DOMAIN` with the **Domain** from above. These URLs are required for the authentication result to be redirected from the browser to the app:

```
com.auth0samples://YOUR_DOMAIN/ios/com.auth0samples/callback,
com.auth0samples://YOUR_DOMAIN/android/com.auth0samples/callback
```

6. Add the same values to the **Allowed Logout URLs** field as well. These are required for the browser to redirect back to the app after the user logs out.
7. Scroll down and click **Save Changes**.

## 3. Run The App

Run your app on an emulator, simulator, or your own connected device.

- To run the app on iOS run `yarn run ios`.
- To run the app on Android run `yarn run android`.

The first run may take a while to fully launch. Keep an eye out for confirmation windows and watch the terminal for output and results.

**Note:** If you get an error about "No bundle URL present" try clicking reload in the app or running `yarn run ios` again. 
