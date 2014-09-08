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


function loadApi() {
    var apisToLoad;
    var callback = function () {
        if (--apisToLoad == 0) {
            signin(true, handleAuth);
        }
    };


    apisToLoad = 2;
    //Parameters are APIName,APIVersion,CallBack function,API Root
    gapi.client.load(API_NAME, API_VER, callback, ROOT);
    gapi.client.load('oauth2', 'v2', callback);
}

function handleAuth() {
    console.log('handle auth');
    var request = gapi.client.oauth2.userinfo.get().execute(function (resp) {
        if (!resp.code) {
            // User is signed in, so hide the button
            //document.getElementById('loginButton').style.visibility = 'hidden';
            document.getElementById('login').innerText = 'Welcome ' + resp.name;
        }
        else {
            document.getElementById('loginButton').style.visibility = '';
        }
    });
}

function signin(mode, callback) {
    console.log('attempting login');
    gapi.auth.authorize({client_id: CLIENT_ID, scope: SCOPES, immediate: mode}, callback);
}
