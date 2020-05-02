import Converter from "../../utils/converter/converter.utils";

const DEFAULT_BAUD = 9600;

class JSDuinoSerial {
  private converter: Converter;
  public baud: number;

  constructor(converter: Converter) {
    this.converter = converter;
  }

  begin = (baud: number = DEFAULT_BAUD) => {
    this.baud = baud;
    this.converter.append(`Serial.begin(${baud});`);
  };

  println = (text: string) => {
    this.converter.append(`Serial.println("${text}");`);
  };

  print = (text: string) => {
    this.converter.append(`Serial.print("${text}");`);
  };

  printVariable = (variableName: string) => {
    this.converter.append(`Serial.print(${variableName});`);
  };

  printlnVariable = (variableName: string) => {
    this.converter.append(`Serial.println(${variableName});`);
  };
}

export default JSDuinoSerial;
