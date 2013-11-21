// Mask for accelerometer x y z data
var MASK = 0x8000 | 0x4000 | 0x2000;

module.exports = function(sphero, options) {
	var rate = options.rate || 40, // default 10Hz
		samples = options.samples || 1; // default 1 sample per packet

	// Turn on data streaming
	sphero.setDataStreaming(rate, samples, MASK, 0);

	sphero.on("packet", function(packet) {
		if (packet.ID_CODE === 0x03) {
			sphero.emit("accel", {
				x: packet.DATA.readInt16BE(0),
				y: packet.DATA.readInt16BE(2),
				z: packet.DATA.readInt16BE(4),
			});
		}
	});
};
