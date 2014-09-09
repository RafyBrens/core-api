/**
 * Contains functions for the navigation of the site.
 *
 * Created by rodrigopavezi on 05/09/14.
 */


function navigate(from, to) {

    var fromElement = document.getElementById(from);
    fromElement.style.display = "none";
    document.getElementById(to).style.display = "block";

    var _formElement = fromElement.querySelector(".form");
    var _resultElement = fromElement.querySelector(".result");
    var _responsePanel = fromElement.querySelector(".responsePanel");
    if (_formElement) {
        _formElement.reset();
    }
    if (_resultElement) {
        _resultElement.innerHTML = "";
    }
    if(_responsePanel){
        _responsePanel.style.display = "none";
    }

}

