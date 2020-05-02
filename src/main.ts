import {
  setup,
  loop,
  pinMode,
  OUTPUT,
  compile,
  digitalRead,
  LOW,
  digitalWrite,
  equals,
} from "./utils";

const LEDS = [13, 12];

setup(() => {
  LEDS.map((pin) => pinMode(pin, OUTPUT));
});

loop(() => {
  const t = digitalRead(LEDS[0]);

  equals(t, 10, () => {
    digitalWrite(LEDS[0], LOW);
  });
});

console.log(compile());
