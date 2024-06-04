# node-core
The node-core module provides a set of generic and basic functions for node servers

## Usage

### Import package

In your node code:

```node
const CORE = require('@damiencassu/node-core');
````

Do not forget to update your package.json dependencies accordingly

```json
"dependencies": {
	"@damiencassu/node-core": "latest"
}
```

You might also need to configure npm to look for this package in Github Packages instead of npmjs.com by adding this line to your .npmrc configuration file

```ini
@damiencassu:registry=https://npm.pkg.github.com
```

### Load the app package.json as an object

```node
const APP_PACKAGE_JSON = CORE.getAppPackageJson();
```
RQ: Will return `undefined` if an error occurred

### Read the application version from the loaded app package.json object

```node
const APP_VERSION = CORE.getAppVersion(APP_PACKAGE_JSON);
```
RQ: Will return `undefined` if an error occurred

### Read the application repository url from the loaded app package.json object

```node
const APP_REPO_URL = CORE.getAppRepoUrl(APP_PACKAGE_JSON);
```
RQ: Will return `undefined` if an error occurred

### Read the application port from the loaded app package.json object

```node
const APP_PORT = CORE.getAppPort(APP_PACKAGE_JSON);
```
RQ: Will return `undefined` if an error occurred

### Know if the application is running in a docker container

```node
const DOCKERIZED = CORE.isDockerized();
```
RQ: Will return `true` it the application is dockerized, `false` if not

### Load a JSON file as an object

```node
const CONFIG_FILE = loadConfigFile ("./config.json")
```
RQ: Will return `undefined` if an error occurred

### Check if a new version of the app is available on the app repository

```node
CORE.checkAppUpdate(APP_VERSION, APP_REPO_URL, function (result) {

      if(result.error){
          console.log("An error occurred while checking for new version");
      } else if (result.update) {
          console.log("A new version is available: " + result.latest);
      } else {
          console.log("No new version available");
      }
});
```

> [!TIP]
> All above functions accept a [node-syslogger](https://github.com/damiencassu/node-syslogger/) object as an optional parameter and will log messages if the debug level is set.
> 
> For instance you can use ```CORE.getAppRepoUrl(APP_PACKAGE_JSON, sysLogger);```
