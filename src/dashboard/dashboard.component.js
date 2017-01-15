System.register(['angular2/core', 'angular2/router', 'angular2/http', '../service/access.service', '../navigation/navigation.compoment'], function(exports_1, context_1) {
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
    var core_1, router_1, http_1, access_service_1, navigation_compoment_1;
    var DashboardComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (access_service_1_1) {
                access_service_1 = access_service_1_1;
            },
            function (navigation_compoment_1_1) {
                navigation_compoment_1 = navigation_compoment_1_1;
            }],
        execute: function() {
            DashboardComponent = (function () {
                function DashboardComponent(router, http, _accessChecker) {
                    this.router = router;
                    this.http = http;
                    this._accessChecker = _accessChecker;
                }
                DashboardComponent.prototype.ngOnInit = function () {
                    this._accessChecker.checkAccessAndRedirect('viewDashboard', 'Dashboard');
                    this.name = localStorage.getItem('name');
                };
                DashboardComponent = __decorate([
                    core_1.Component({
                        selector: 'my-dashboard',
                        templateUrl: '../src/dashboard/dashboard.component.html',
                        styleUrls: ['../css/dashboard.component.css'],
                        directives: [navigation_compoment_1.NavigationComponent]
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, http_1.Http, access_service_1.AccessService])
                ], DashboardComponent);
                return DashboardComponent;
            }());
            exports_1("DashboardComponent", DashboardComponent);
        }
    }
});
//# sourceMappingURL=dashboard.component.js.map