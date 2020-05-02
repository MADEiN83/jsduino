import JSDuino, {
  Serial,
  setup,
  loop,
  delay,
  compile,
  digitalRead,
} from "./core";

const LEDS = [13, 12, 11, 10, 9, 8];
const leds = LEDS.map((led) => new JSDuino.Led(led));

const start = () => {
  setup(() => {
    Serial.begin();
    leds.forEach((led) => led.output());

    // offAll();
  });

  loop(() => {
    leds[0].toggle();

    leds[0].getDigitalValue("one");
    Serial.print("My value is: ");
    Serial.printVariable("one");

    delay(1000);
    leds[0].toggle();
    leds[0].getDigitalValue("two");
    Serial.print("My value is: ");
    Serial.printVariable("two");
    delay(1000);
  });

  console.log(compile());
};

const offAll = () => {
  leds.forEach((led) => led.off());
};

start();
