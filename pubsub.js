"use strict"; 

var PubSub = function() {      
    // Callbacks bucket
    this.calls = {};
};

PubSub.prototype.publish = function(topic, args) {
    if(!this.calls[topic]) {
        return;
    }

    for (var i = 0; i < this.calls[topic].length; i++) {
        var callback = this.calls[topic][i];
        if (typeof(callback) === 'function') {
            callback.call(null, args);
        }
    }
};

PubSub.prototype.subscribe = function(topic, callback) {
    if(topic.trim().length === 0) {
        return false;
    }
    if(!this.calls[topic]) {
        this.calls[topic] = [];
    }

    return this.calls[topic].push(callback);
};

PubSub.prototype.unsubscribe = function(topic, index) {
    index = index - 1;
    if (!this.calls[topic] || !this.calls[topic][index]) {
        return false;
    }

    this.calls[topic].splice(index, 1);

    return true;
};





