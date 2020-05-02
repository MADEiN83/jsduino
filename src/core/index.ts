import JSDuinoLed from "./components/led";
import Converter from "./utils/converter/converter.utils";
import JSDuinoSerial from "./utils/serial/serial.utils";

const converter = new Converter();
const serial = new JSDuinoSerial(converter);

export const setup = (callback: () => void) => {
  converter.type = "setup";
  converter.append("void setup(){");
  callback();
  converter.append("}");
};

export const loop = (callback: () => void) => {
  converter.type = "loop";
  converter.append("void loop(){");
  callback();
  converter.append("}");
};

export const delay = (delayInMs: number) => {
  converter.append(`delay(${delayInMs});`);
};

export const compile = () => converter.compile();

export const digitalRead = (pin: number, variableName: string) => {
  converter.append(`var ${variableName} = digitalRead(${pin});`);
};

namespace JSDuino {
  export class Led extends JSDuinoLed {
    constructor(pin: number) {
      super(pin, converter);
    }
  }
}

export default JSDuino;
export { serial as Serial };
