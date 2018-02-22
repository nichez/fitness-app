// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyCTzp8O7MySzsO0Ly9FLB5bNczDsijt2cA',
    authDomain: 'ng-fitness-tracker-dcd15.firebaseapp.com',
    databaseURL: 'https://ng-fitness-tracker-dcd15.firebaseio.com',
    projectId: 'ng-fitness-tracker-dcd15',
    storageBucket: 'ng-fitness-tracker-dcd15.appspot.com',
    messagingSenderId: '1041373360071'
  }
};
