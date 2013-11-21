var through = require("through");

// Mask for accelerometer x y z data
var MASK = 0x8000 | 0x4000 | 0x2000;

module.exports = function(sphero, options) {
	options = options || {};
	var stream = through();
	var rate = 400 / (options.rate || 10); // default 10Hz

	// Turn on accelerometer data streaming
	sphero.setDataStreaming(rate, 1, MASK, 0);

	// Read incoming accelerometer data and emit on stream
	sphero.on("packet", function(packet) {
		if (packet.ID_CODE === 0x03) {
			stream.queue({
				x: packet.DATA.readInt16BE(0),
				y: packet.DATA.readInt16BE(2),
				z: packet.DATA.readInt16BE(4),
			});
		}
	});

	return stream;
};
