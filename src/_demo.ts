const leds = [13, 12];

function setup() {
  leds.map((aLed) => pinMode(aLed, OUTPUT));
}
