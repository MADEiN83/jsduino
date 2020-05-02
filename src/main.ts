import JSDuino, { setup, loop, delay, compile, cond, Serial } from "./core";

const BUILTIN_LED_PIN = 12;
const myLed = new JSDuino.Led(BUILTIN_LED_PIN);

setup(() => {
  Serial.begin();
  myLed.output();
});

loop(() => {
  myLed.toggle();
  delay(500);
  // myLed.toggle();

  const one = myLed.getDigitalValue();
  const two = myLed.getDigitalValue();

  // delay(500);
  // myLed.toggle();
  // myLed.getDigitalValue("two");
  // delay(500);

  cond(one, "LOW", {
    operator: "==",
    onTrue: () => {
      Serial.println("YES!!");
    },
    onFalse: () => {
      Serial.println("NO...!!");
    },
  });

  delay(500);
});

console.log(compile());
