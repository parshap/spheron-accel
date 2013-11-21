var sphero = require("spheron").sphero(),
	accel = require("spheron-accel");

sphero.on("open", function() {
	accel(sphero).on("data", function(data) {
		console.log("accelerometer data", data.x, data.y, data.z);
	});
});

sphero.open("/dev/cu.Sphero-BYR-RN-SPP");
