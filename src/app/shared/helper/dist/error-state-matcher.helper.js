"use strict";
exports.__esModule = true;
exports.InputErrorStateMatcher = void 0;
var InputErrorStateMatcher = /** @class */ (function () {
    function InputErrorStateMatcher() {
    }
    InputErrorStateMatcher.prototype.isErrorState = function (control, form) {
        var isSubmitted = form && form.submitted;
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    };
    return InputErrorStateMatcher;
}());
exports.InputErrorStateMatcher = InputErrorStateMatcher;
