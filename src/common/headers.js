System.register(['angular2/http', '../common/general'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var http_1, general_1;
    var contentHeaders, token;
    return {
        setters:[
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (general_1_1) {
                general_1 = general_1_1;
            }],
        execute: function() {
            exports_1("contentHeaders", contentHeaders = new http_1.Headers());
            contentHeaders.append('Accept', 'application/json');
            contentHeaders.append('Content-Type', 'application/json');
            token = localStorage.getItem('token');
            if (!general_1.isEmpty(token)) {
                contentHeaders.append('Authorization', 'Token ' + token);
            }
        }
    }
});
//# sourceMappingURL=headers.js.map