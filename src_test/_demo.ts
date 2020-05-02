const BUILTIN_LED_PIN = 13;

const leds = [13, 12];

function setup() {
  leds.map((led) => pinMode(led, OUTPUT));
}
