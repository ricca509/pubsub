describe("The pubsub library", function() {
    var pubsub = new PubSub(), key;

    it ("should allow to subscribe to an event", function() {
        key = pubsub.on("test", function(args) {
            console.log('Test ' + args);
        });

        key2 = pubsub.on("", function(args) {
            console.log('Test ' + args);
        });

        expect(key).not.toBeUndefined();
        expect(key2).toBeFalsy();
    });

    it("should call the callback function when event is fired", function() {
        var callbacks = {
            one: function(args) {
                console.log('Test callback gets called with: ' + args);
            }
        };

        key = pubsub.on("test", callbacks.one);

        spyOn(callbacks, "one");

        pubsub.trigger("test", ["one", "two"]);
    });
});