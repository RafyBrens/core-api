/**
 * Created by rsp on 05/09/14.
 */


function navigate(from, to) {
    document.getElementById(from).style.display = "none";
    document.getElementById(to).style.display = "block";

    var _formElement = document.getElementById(from).querySelector(".form");
    var _resultElement = document.getElementById(from).querySelector(".result");
    if (_formElement) {
        _formElement.reset();
    }
    if (_resultElement) {
        _resultElement.innerHTML = ""
    }
}

