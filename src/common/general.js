System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function isEmpty(object) {
        return (typeof object == 'undefined' || object == null
            || JSON.stringify(object) === JSON.stringify({}) || object.length <= 0);
    }
    exports_1("isEmpty", isEmpty);
    return {
        setters:[],
        execute: function() {
        }
    }
});
//# sourceMappingURL=general.js.map