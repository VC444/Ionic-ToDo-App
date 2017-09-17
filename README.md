# Ionic To-Do App
This to-do app is built using the Ionic Framework, which uses AngularJS. <br>
Optimized Material Design for Android devices, and IOS native feel for Apple devices.

## How To Use

* Install Node.js and npm

* Install Apache Cordova and Ionic

```bash
npm install -g cordova ionic
```
* Clone the repo <br>

* Head over to src/app/app.module.ts and enter your own info for firebaseConfig.
  * To get Firebase info, create a project in Google Firebase and select "Add Firebase to your web app".

```bash
var firebaseConfig = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: ""
  };
  ```

* Run the app

```bash
ionic serve
```


