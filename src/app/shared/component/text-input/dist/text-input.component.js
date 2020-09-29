"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.TextInputComponent = void 0;
var core_1 = require("@angular/core");
var error_state_matcher_helper_1 = require("../../helper/error-state-matcher.helper");
var TextInputComponent = /** @class */ (function () {
    function TextInputComponent() {
        this.hasMinLength = false;
        this.hasMaxLength = false;
        this.errorMatcher = new error_state_matcher_helper_1.InputErrorStateMatcher();
    }
    TextInputComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        core_1.Input()
    ], TextInputComponent.prototype, "fGroupName");
    __decorate([
        core_1.Input()
    ], TextInputComponent.prototype, "label");
    __decorate([
        core_1.Input()
    ], TextInputComponent.prototype, "controlName");
    __decorate([
        core_1.Input()
    ], TextInputComponent.prototype, "hint");
    __decorate([
        core_1.Input()
    ], TextInputComponent.prototype, "isRequired");
    __decorate([
        core_1.Input()
    ], TextInputComponent.prototype, "isEmail");
    __decorate([
        core_1.Input()
    ], TextInputComponent.prototype, "hasMinLength");
    __decorate([
        core_1.Input()
    ], TextInputComponent.prototype, "minLengthValue");
    __decorate([
        core_1.Input()
    ], TextInputComponent.prototype, "hasMaxLength");
    __decorate([
        core_1.Input()
    ], TextInputComponent.prototype, "maxLengthValue");
    TextInputComponent = __decorate([
        core_1.Component({
            selector: 'app-text-input',
            templateUrl: './text-input.component.html',
            styleUrls: ['./text-input.component.scss']
        })
    ], TextInputComponent);
    return TextInputComponent;
}());
exports.TextInputComponent = TextInputComponent;
