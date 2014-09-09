/**
 * Contains function for dealing with the output.
 *
 * Created by rodrigopavezi on 05/09/14.
 */

// ------------------------- Format Output ----------------------------
/**
 * Create the pre element for the output.
 * @param inp
 * @param div
 */
function output(inp, div) {

    var responsePanel = document.getElementById(div);
    responsePanel.querySelector(".result").appendChild(document.createElement('pre')).innerHTML = inp;

    responsePanel.style.display = "block";
}

/**
 * Format the json response.
 * @param json
 * @returns {XML|string}
 */
function syntaxHighlight(json) {
    json = json.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, function (match) {
        var cls = 'number';
        if (/^"/.test(match)) {
            if (/:$/.test(match)) {
                cls = 'key';
            } else {
                cls = 'string';
            }
        } else if (/true|false/.test(match)) {
            cls = 'boolean';
        } else if (/null/.test(match)) {
            cls = 'null';
        }
        return '<span class="' + cls + '">' + match + '</span>';
    });
}

/**
 * Reset the result output div
 *
 * @param div
 */
function reset(div){
    var _resultElement = document.getElementById(div).querySelector(".result");
    if(_resultElement){
        _resultElement.innerHTML = "";
    }
}