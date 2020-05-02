import JSDuinoLed from "./components/led";
import Converter from "./utils/converter/converter.utils";
import JSDuinoSerial from "./utils/serial/serial.utils";
import JSDuinoVariable from "./components/variable";

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

type IConditionArgument = number | string | JSDuinoVariable;
interface IConditionArgs {
  operator: "==" | "!=";
  onTrue: () => void;
  onFalse?: () => void;
}

export const cond = (
  firstArgument: IConditionArgument,
  secondArgument: IConditionArgument,
  args: IConditionArgs
) => {
  const { operator, onTrue, onFalse } = args;

  const firstArgumentName =
    firstArgument instanceof JSDuinoVariable
      ? (firstArgument as JSDuinoVariable).name
      : firstArgument;
  const secondArgumentName =
    secondArgument instanceof JSDuinoVariable
      ? (secondArgument as JSDuinoVariable).name
      : secondArgument;

  converter.append(`if(${firstArgumentName}${operator}${secondArgumentName}){`);
  onTrue();
  converter.append(`}`);

  if (onFalse) {
    converter.append(`else{`);
    onFalse();
    converter.append(`}`);
  }
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
