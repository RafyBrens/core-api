/**
 * Parameters and values needed for
 * authentication and loading of
 * the google client javascript api.
 *
 * Created by rodrigopavezi on 05/09/14.
 */

/**
 * Parameters used by the api for authentication of the client app.
 *
 * To make calls to Google Cloud Endpoits the Google Javascript Client API
 * needs to be setup with a valid client id
 * which comes from an app created on Google App Engine.
 * Then, the client id is configured with a javascript origin attribute.This tights
 * a client id with the domain url of the server which the Google JavaScript Client API runs.
 * Below there is two client ids: the first one, which is comment out,
 * has the javacript origin attribute setup to http://localhost; the second is setup to
 * the github page.
 *
 * @type {string}
 */

// When developing locally you can use the below client id as it has configured http://localhost as the origin of javascript calls.
// Just uncomment the first and comment out the second
//var CLIENT_ID = '1078646427254-mb590bbaki7a6qlr7rsoq2cc76rn0d42.apps.googleusercontent.com'; //CLIENT_ID for local development
var CLIENT_ID = '1039315471777-oqrb8m2qfkrfp2hv2f9dta5jf72ob72p.apps.googleusercontent.com'; // CLIENT_ID for github pages
var SCOPES = 'https://www.googleapis.com/auth/userinfo.email';
var ROOT = 'https://rvacore-test.appspot.com/_ah/api';
var API_NAME = 'core';
var API_VER = 'v0';

/**
 * Load the oauth2 api.
 *
 */
function handleAuth() {
    console.log('handle auth');
    gapi.client.load('oauth2', 'v2', makeOAuth2Request);
}

/**
 * Make a request to OAuth2 for getting the user name.
 */
function makeOAuth2Request() {
    console.log('make request to oauth2');
    var request = gapi.client.oauth2.userinfo.get();

    request.execute(function (resp) {
        if (!resp.code) {
            // User is signed in, so hide the button
            document.getElementById('signinButton').style.visibility = 'hidden';
            document.getElementById('signinText').innerText = 'Welcome ' + resp.name;
        }
        else {
            document.getElementById('signinButton').style.visibility = 'visible';
        }
    });
}

/**
 *  Call api to signin a user.
 *
 * @param mode
 * @param callback
 */
function signin(mode, callback) {
    console.log('attempting login');
    gapi.auth.authorize({client_id: CLIENT_ID, scope: SCOPES, immediate: mode}, callback);
}
