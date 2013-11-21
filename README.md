# spheron-accel

Stream accelerometer data from your [Sphero] using the *[spheron]*
module.

Note that this module uses the *Set Data Streaming* command, which will
overwrite any previous calls and any future calls will stop the
accelerometer data stream.

## Example

```javascript
var sphero = require("spheron").sphero(),
	accel = require("spheron-accel");

sphero.on("open", function() {
	accel(sphero).on("data", function(data) {
		console.log("accelerometer data", data.x, data.y, data.z);
	});
});

sphero.open("/dev/cu.Sphero-BYR-RN-SPP");
```

## API

### accel(sphero, options)

Given a `sphero` object (created by the *[spheron]* module), start
reading accelerometer data and return a stream that will emit the
values.

Options:

 * **rate**: Number of data samples read per second (default 10)

## Installation

```
npm install spheron-accel
```

[Sphero]: http://gosphero.com
[spheron]: https://github.com/hybridgroup/spheron
