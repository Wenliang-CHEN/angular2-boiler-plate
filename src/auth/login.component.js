System.register(['angular2/core', 'angular2/router', 'angular2/common', 'angular2/http', '../common/general'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, common_1, http_1, general_1;
    var LoginComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (general_1_1) {
                general_1 = general_1_1;
            }],
        execute: function() {
            LoginComponent = (function () {
                function LoginComponent(_router, http) {
                    this._router = _router;
                    this.http = http;
                }
                LoginComponent.prototype.ngOnInit = function () {
                    var currentToken = localStorage.getItem('token');
                    if (!general_1.isEmpty(currentToken)) {
                        this._router.navigate(['Dashboard']);
                    }
                };
                LoginComponent.prototype.login = function (event, name, accessCode) {
                    var _this = this;
                    event.preventDefault();
                    /*
                    let body = JSON.stringify({ name, accessCode });
                    this.http.post(Constant.baseUrl + 'auth/login' , body, { headers: contentHeaders })
                      .subscribe(
                        response => {
                          let tokenModel = response.json();
                
                          if(!isEmpty(tokenModel.token)){
                              localStorage.setItem('token',tokenModel.token);
                              localStorage.setItem('permissions', tokenModel.permissions);
                
                              let returnUrl = localStorage.getItem('returnUrl') != null? localStorage.getItem('returnUrl'):'Dashboard';
                              localStorage.setItem('returnUrl', null);
                
                              this._router.navigate([returnUrl]);
                          } else {
                              alert('incorrect accessCode or name');
                          }
                        },
                        error => {
                          console.log(error);
                        }
                      );
                    */
                    this.http.request('data/userToken.json').subscribe(function (response) {
                        var tokenModel = response.json();
                        if (accessCode == tokenModel.accessCode) {
                            localStorage.setItem('token', tokenModel.token);
                            localStorage.setItem('permissions', JSON.stringify(tokenModel.permissions));
                            localStorage.setItem('name', name);
                            var returnUrl = localStorage.getItem('returnUrl') != null ? localStorage.getItem('returnUrl') : 'Dashboard';
                            localStorage.setItem('returnUrl', null);
                            _this._router.navigate([returnUrl]);
                        }
                        else {
                            alert('incorrect access code!');
                        }
                    });
                };
                LoginComponent = __decorate([
                    core_1.Component({
                        selector: 'login'
                    }),
                    core_1.View({
                        directives: [router_1.RouterLink, common_1.CORE_DIRECTIVES, common_1.FORM_DIRECTIVES],
                        templateUrl: './src/auth/login.html',
                        styles: ['./login.css']
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, http_1.Http])
                ], LoginComponent);
                return LoginComponent;
            }());
            exports_1("LoginComponent", LoginComponent);
        }
    }
});
//# sourceMappingURL=login.component.js.map