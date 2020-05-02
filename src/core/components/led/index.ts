import Converter from "../../utils/converter/converter.utils";
import { PinModes } from "../../enums/pinModes/pinModes.enum";
import { DigitalStates } from "../../enums/digitalStates/digitalStates.enum";

class JSDuinoLed {
  private converter: Converter;
  public pin: number;
  public mode: PinModes;
  public state: DigitalStates;

  constructor(pin: number, converter: Converter) {
    this.pin = pin;
    this.converter = converter;
  }

  public output = () => {
    this.mode = PinModes.OUTPUT;
    this.converter.append(`pinMode(${this.pin},OUTPUT);`);
  };

  public input = () => {
    this.mode = PinModes.INPUT;
    this.converter.append(`pinMode(${this.pin},INPUT);`);
  };

  public on = () => {
    this.state = DigitalStates.LOW;
    this.converter.append(`digitalWrite(${this.pin},LOW);`);
  };

  public off = () => {
    this.state = DigitalStates.HIGH;
    this.converter.append(`digitalWrite(${this.pin},HIGH);`);
  };

  public getDigitalValue = (variableName: string) => {
    this.converter.append(`int ${variableName} = digitalRead(${this.pin});`);
  };

  public toggle = () => {
    if (this.state === DigitalStates.HIGH) {
      this.on();
    } else {
      this.off();
    }
  };
}

export default JSDuinoLed;
