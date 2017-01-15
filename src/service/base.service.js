System.register(['angular2/http', '../common/general'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var http_1, general_1;
    var BaseService;
    return {
        setters:[
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (general_1_1) {
                general_1 = general_1_1;
            }],
        execute: function() {
            BaseService = (function () {
                function BaseService(router, http) {
                    this.router = router;
                    this.http = http;
                }
                BaseService.prototype.authHeaders = function () {
                    var contentHeaders = new http_1.Headers();
                    contentHeaders.append('Accept', 'application/json');
                    contentHeaders.append('Content-Type', 'application/json');
                    var token = localStorage.getItem('token');
                    if (!general_1.isEmpty(token)) {
                        contentHeaders.append('Authorization', 'Token ' + token);
                    }
                    return contentHeaders;
                };
                BaseService.prototype.handleError = function (error, returnUrl) {
                    if (returnUrl === void 0) { returnUrl = ''; }
                    console.log(error);
                    localStorage.clear();
                    localStorage.setItem('returnUrl', !general_1.isEmpty(returnUrl) ? returnUrl : 'Dashboard');
                    this.router.navigate(['Login']);
                };
                return BaseService;
            }());
            exports_1("BaseService", BaseService);
        }
    }
});
//# sourceMappingURL=base.service.js.map