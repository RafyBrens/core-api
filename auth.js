/**
 * Parameters and values needed for
 * authentication and loading of
 * the google client javascript api.
 *
 * Created by Rodrigo Serviuc Pavezi on 05/09/14.
 */

var CLIENT_ID = '1078646427254-mb590bbaki7a6qlr7rsoq2cc76rn0d42.apps.googleusercontent.com';
var SCOPES = 'https://www.googleapis.com/auth/userinfo.email';
var ROOT = 'https://rvacore-test.appspot.com/_ah/api';
var API_NAME = 'core';
var API_VER = 'v0';

function handleAuth() {
    console.log('handle auth');
    gapi.client.load('oauth2', 'v2', makeOAuth2Request);
}

function makeOAuth2Request() {
    var request = gapi.client.oauth2.userinfo.get();

    request.execute(function (resp) {
        if (!resp.code) {
            // User is signed in, so hide the button
            document.getElementById('signinButton').style.display = 'none';
            document.getElementById('signinText').innerText = 'Welcome ' + resp.name;
        }
        else {
            document.getElementById('signinButton').style.display = 'block';
        }
    });
}

function signin(mode, callback) {
    console.log('attempting login');
    gapi.auth.authorize({client_id: CLIENT_ID, scope: SCOPES, immediate: mode}, callback);
}
