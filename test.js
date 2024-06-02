//Test file for syslogger module

//Module loading
const CORE = require("./index");
const PR = require('node:process');

//Constants
const GET_APP_PACKAGE_ERROR = 1;
const GET_APP_VERSION_ERROR = 2;
const GET_APP_REPO_URL_ERROR = 3;

//Variables
var errorCode = 0;

//Retreiving package.json as an object
const APP_PACKAGE_JSON = CORE.getAppPackageJson();
//Checking results
if (APP_PACKAGE_JSON == undefined){

	errorCode = GET_APP_PACKAGE_ERROR;
}

//Retreiving app version from package.json object
const APP_VERSION = CORE.getAppVersion(APP_PACKAGE_JSON);
//Checking results
if (APP_PACKAGE_JSON != undefined && APP_VERSION == undefined) {
	
	errorCode = GET_APP_VERSION_ERROR;
}

//Retreiving app repo url from package.json object
const APP_REPO_URL = CORE.getAppRepoUrl(APP_PACKAGE_JSON);
//Checking results
if (APP_PACKAGE_JSON != undefined && APP_REPO_URL == undefined) {

	errorCode = GET_APP_REPO_URL_ERROR;
}

console.log("Exit code: " + errorCode);
PR.exit(errorCode);
