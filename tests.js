module("pubsub");

test("Extend test", 4, function() {
    var obj = {};
    obj.speak = function(lang) {
        return lang;
    };

    obj = pubSub.extend(obj);

    ok(obj.hasOwnProperty('speak'), "Object has it's own method");
    ok(obj.hasOwnProperty('publish'), "Object has 'publish' method");
    ok(obj.hasOwnProperty('subscribe'), "Object has 'subscribe' method");
    ok(obj.hasOwnProperty('unsubscribe'), "Object has 'unsubscribe' method");
});

test("Subscribe test", 2, function() {    
    var obj = {}, key, key2, key3;
    obj = pubSub.extend(obj);

    key = obj.subscribe("test", function(args) {
        console.log('Test ' + args);
    });

    key2 = obj.subscribe("", function(args) {
        console.log('Test ' + args);
    });

    ok(key >= 0, "Subscription to 'test' event ok");
    ok(key2 === false, "Subscription to empty event should fail");
});

test("Publish test", 1, function() {
    var obj = {}, key, key2, key3;
    obj = pubSub.extend(obj);

    key = obj.subscribe("test", function(args) {
        ok(true, 'Test callback gets called with: ' + args);
    });

    obj.publish("test", ["one", "two"]);
});

test("Unsubscribe test", 3, function() {      
    var obj = {}, key;
    obj = pubSub.extend(obj);

    key = obj.subscribe("test", function(args) {
        console.log('Test called with: ' + args);
    });

    ok(obj.unsubscribe("test", key), "Unsubscribe ok");
    ok(obj.unsubscribe("", key) === false, "Unsubscribe from non-existent event should fail");
    ok(obj.unsubscribe("test", 7) === false, "Unsubscribe from non-existent callback key should fail");
});
