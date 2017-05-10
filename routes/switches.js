var gpio = require('pi-gpio');
const pinForSwitchOne = 7;
const pinForSwitchTwo = 7;
const pinForSwitchThree = 7;

const pinForSwitch = {
    one: 7,
    two: 7,
    three: 7
};

exports.toggleSwitch = function(req, res){
    const Switch = req.params.switch;
    const pin = pinForSwitch[Switch];
    const state = (req.params.state === 'on') ? 1 : 0;
    console.log('reached to switch', Switch);
    console.log('tweaking pin', pin, 'to', state);

	gpio.open(pin, "output", function(err) {
	    gpio.write(pin, state, function() {
	        gpio.close(pin);
	    });
	});
};

