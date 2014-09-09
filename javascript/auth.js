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
 * @type {string}
 */
var CLIENT_ID = '1039315471777-oqrb8m2qfkrfp2hv2f9dta5jf72ob72p.apps.googleusercontent.com';
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
