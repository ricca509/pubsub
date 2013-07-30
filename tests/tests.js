module("pubsub");

var pubsub = new PubSub();

test("Subscribe test", 2, function() {
    key = pubsub.on("test", function(args) {
        console.log('Test ' + args);
    });

    key2 = pubsub.on("", function(args) {
        console.log('Test ' + args);
    });

    ok(key >= 0, "Subscription to 'test' event ok");
    ok(key2 === false, "Subscription to empty event should fail");
});

test("Publish test", 1, function() {
    key = pubsub.on("test", function(args) {
        ok(true, 'Test callback gets called with: ' + args);
    });

    pubsub.trigger("test", ["one", "two"]);
});

test("Unsubscribe test", 3, function() {
    key = pubsub.on("test", function(args) {
        console.log('Test called with: ' + args);
    });

    ok(pubsub.off("test", key), "Unsubscribe ok");
    ok(pubsub.off("", key) === false, "Unsubscribe from non-existent event should fail");
    ok(pubsub.off("test", 7) === false, "Unsubscribe from non-existent callback key should fail");
});
