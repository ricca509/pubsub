var pubSub = (function() {
    "use strict";    

    // Callbacks bucket
    var calls = {};

    var publish = function(topic, args) {
        if(!calls[topic]) {
            return;
        }

        for (var i = 0; i < calls[topic].length; i++) {
            var callback = calls[topic][i];
            if (typeof(callback) === 'function') {
                callback.call(null, args);
            }
        }
    };

    var subscribe = function(topic, callback) {
        if(topic.trim().length === 0) {
            return false;
        }
        if(!calls[topic]) {
            calls[topic] = [];
        }

        return calls[topic].push(callback);
    };

    var unsubscribe = function(topic, index) {
        index = index - 1;
        if (!calls[topic] || !calls[topic][index]) {
            return false;
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

    // Public API
    return {
        extend: extend
    };
})();




