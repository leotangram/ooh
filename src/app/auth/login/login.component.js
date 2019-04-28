"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.showError = false;
        this.user = {
            email: '',
            password: ''
        };
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.authService.login(this.user)
            .subscribe(function (response) {
            console.log(response);
            localStorage.setItem('dwn.roles_access_level', JSON.stringify(response.roles_access_level));
            localStorage.setItem('dwn.token', JSON.stringify(response.token));
            localStorage.setItem('dwn.user', JSON.stringify(response.user));
            _this.authService.isLoggedIn = true;
            _this.router.navigate(['/reports']);
        }, function (error) {
            console.log('error', error);
            _this.showError = true;
        });
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'app-login',
            templateUrl: './login.component.html',
            styleUrls: ['./login.component.scss']
        })
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
