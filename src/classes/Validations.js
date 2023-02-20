"use strict";
exports.__esModule = true;
exports.Validations = void 0;
var mainScreen = document.getElementById("output-screen");
var operators = ["%", "+", "-", "*", "/", ".", "^", ".e+0"];
var openParenthesisCounter = 0;
var closeParenthesisCounter = 0;
var parenthesis = document.getElementById("parenthesis-counter");
var Validations = /** @class */ (function () {
    function Validations() {
    }
    Validations.prototype.openParenthesis = function () {
        if (!isNaN(mainScreen.innerHTML)) {
            mainScreen.innerHTML += "*(";
        }
        else {
            mainScreen.innerHTML += "(";
        }
        openParenthesisCounter++;
        parenthesis.innerHTML = openParenthesisCounter;
    };
    Validations.prototype.closeParenthesis = function () {
        if (openParenthesisCounter > 0) {
            var lastEntry = mainScreen.innerHTML.slice(-1);
            if (closeParenthesisCounter == 0 && lastEntry == "(") {
                mainScreen.innerHTML += "0)";
            }
            else {
                mainScreen.innerHTML += ")";
            }
            openParenthesisCounter--;
            closeParenthesisCounter++;
            parenthesis.innerHTML = openParenthesisCounter;
            if (openParenthesisCounter == 0) {
                closeParenthesisCounter = 0;
                mainScreen.innerHTML += "*";
                parenthesis.innerHTML = "";
            }
        }
    };
    Validations.prototype.validateInput = function (value) {
        var lastEntry = mainScreen.innerHTML.slice(-1);
        if (operators.includes(value)) {
            if (operators.includes(lastEntry)) {
                return false;
            }
            else {
                return true;
            }
        }
        return true;
    };
    return Validations;
}());
exports.Validations = Validations;
