/**
 * Created by rodrigopavezi on 11/14/14.
 */
function updateUser() {
    console.log('updateUser');
    // getting parameter values
    var _data = document.getElementById('updateUser_data').value;
    var _username = document.getElementById('updateUser_username').value;
    var _fields = document.getElementById('updateUser_fields').value;

    // create a javascript object which will be converted to Json
    var parameters = {};
    if (_data) {
        parameters['data'] = _data;
    }
    if (_username) {
        parameters['username'] = _username;
    }
    if (_fields) {
        parameters['fields'] = _fields;
    }

    // loading and calling the api passing the parameter object
    gapi.client.load(API_NAME, API_VER, function () {
        var request = gapi.client.core.user.update(parameters);

        request.execute(function (jsonResp, rawResp) {
            handlesResponse(jsonResp, rawResp, 'updateUserResult');
        });
    }, ROOT);
}