/**
 * Created by rodrigopavezi on 11/14/14.
 */
function updateDisplay() {
    console.log('updateDisplay');
    // getting parameter values
    var _data = document.getElementById('updateDisplay_data').value;
    var _id = document.getElementById('updateDisplay_id').value;
    var _fields = document.getElementById('updateDisplay_fields').value;

    // create a javascript object which will be converted to Json
    var parameters = {};
    if (_data) {
        parameters['data'] = _data;
    }
    if (_id) {
        parameters['id'] = _id;
    }
    if (_fields) {
        parameters['fields'] = _fields;
    }

    // loading and calling the api passing the parameter object
    gapi.client.load(API_NAME, API_VER, function () {
        var request = gapi.client.core.display.update(parameters);

        request.execute(function (jsonResp, rawResp) {
            handlesResponse(jsonResp, rawResp, 'updateDisplayResult');
        });
    }, ROOT);
}