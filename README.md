#PubSub

**What**

A simple and tiny Javascript implementation of the Publisher/Subscriber pattern.

**Usage**

```javascript
var pubsub = new PubSub();

// Subscribe to event (creates the event if it does not exist) and get
// subscription key
var key = pubsub.subscribe("test", function(args) {
	console.log('Test ' + args);
});

// Publish event "test" with an array of values
pubsub.publish("test", ["one", "two"]);

// Unscribe from the event with your key
pubsub.unsubscribe("test", key);
```

**Tests**
There is a grunt file to run QUnit tests and Hinting.

```javascript
grunt qunit
grunt jshint
```

**Tools used**

* [Grunt](http://gruntjs.com/)
* [QUnit](http://qunitjs.com/)
* [JSHint](http://www.jshint.com/)

If you have any questions or feedback, feel free to contact me using [@CoppolaRiccardo](https://twitter.com/CoppolaRiccardo) on Twitter.
