/**
 * Created by rodrigopavezi on 11/14/14.
 */
function getPresentation() {
    console.log('getPresentation');
    // getting parameter values
    var _id = document.getElementById('getPresentation_id').value;
    var _companyId = document.getElementById('getPresentation_companyId').value;
    var _fields = document.getElementById('getPresentation_fields').value;

    // create a javascript object which will be converted to Json
    var parameters = {};
    if (_id) {
        parameters['id'] = _id;
    }
    if (_companyId) {
        parameters['companyId'] = _companyId
    }
    if (_fields) {
        parameters['fields'] = _fields;
    }

    // loading and calling the api passing the parameter object
    gapi.client.load(API_NAME, API_VER, function () {
        var request = gapi.client.core.presentation.get(parameters);

        request.execute(function (jsonResp, rawResp) {
            handlesResponse(jsonResp, rawResp, 'getPresentationResult');
        });
    }, ROOT);
}