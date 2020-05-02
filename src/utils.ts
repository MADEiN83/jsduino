export const OUTPUT = "OUTPUT";
export const INPUT = "INTPUT";
export const LOW = "LOW";
export const HIGH = "HIGH";

let res = "";

export const setup = (callback: () => void) => {
  res += "void setup(){";
  callback();
  res += "}";
};

export const loop = (callback: () => void) => {
  res += "void selooptup(){";
  callback();
  res += "}";
};

export const pinMode = (pin: number, mode: "INPUT" | "OUTPUT") => {
  res += `pinMode(${pin}, ${mode});`;
};

export const digitalWrite = (pin: number, type: "LOW" | "HIGH") => {
  res += `digitalWrite(${pin},${type});`;
};

export const digitalRead = (pin: number): Variable => {
  const name = "randomstr";
  res += `var ${name} = digitalRead(${pin});`;
  return new Variable(name);
};

export const equals = (v1: any, v2: any, callback: () => void) => {
  const left = v1 instanceof Variable ? (v1 as Variable).name : v1;
  const right = v2 instanceof Variable ? (v2 as Variable).name : v2;
  res += `if(${left}==${right}){`;
  callback();
  res += `}`;
};

export const compile = () => res;

//
class Variable {
  public name: string;

  constructor(name: string) {
    this.name = name;
  }
}
