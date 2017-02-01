# ui5-boilerplate

This app can be run in the local computer using the gulp webserver, provided you have already installed node.js and the gulp package.

## Setup

But, before doing that, one needs to setup the resources and the SAP url (RESOURCES_URL and SAP_URL) inside `gulpfile.js`, so the local webserver knows where to proxy the requests from the app.

## Running the app
After that, you're good to go. Open the terminal, navigate to the project's root folder.
If it's the first time you're loading this app, run the install command. This command will install all the dev dependencies listeed in the package.json file:

```
npm install
```

To start the app, run the following command:
```
gulp
```
