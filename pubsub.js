var pubSub = (function() {
    "use strict";
    // Privates

    // Callbacks bucket
    var calls = {};

    var publish = function(topic, args) {
        if(!calls[topic]) {
            return;
        }

        for (var i = 0; i < calls[topic].length; i++) {
            var call = calls[topic][i];
            if (typeof(call) === 'function') {
                call.call(null, args);
            }
        }
    };

    var subscribe = function(topic, call) {
        if(!calls[topic]) {
            calls[topic] = [];
        }

        return calls[topic].push(call);
    };

    var unsubscribe = function(topic, index) {
        index = index - 1;
        if (!calls[topic][index]) {
            return;
        }

        calls[topic].splice(index, 1);

        return true;
    };

    var extend = function(obj) {
        obj.publish = publish;
        obj.subscribe = subscribe;
        obj.unsubscribe = unsubscribe;

        return obj;
    };

    // Publics
    return {
        extend: extend
    };
})();




