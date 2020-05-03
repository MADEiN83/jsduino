import { random, extractName } from "../utils/variable/variable.utils";
import { transpile, TRANSPILE_KEYS } from "../utils/replace/replace.utils";
import { Variable } from "./components";

export const OUTPUT = "OUTPUT";
export const INPUT = "INTPUT";
export const LOW = "LOW";
export const HIGH = "HIGH";

let res = "";

export const setup = (callback: () => void) => {
  const saveRes = res;
  res = "";
  callback();

  res = saveRes + transpile(TRANSPILE_KEYS.SETUP, { content: res });
};

export const loop = (callback: () => void) => {
  const saveRes = res;
  res = "";
  callback();

  res = saveRes + transpile(TRANSPILE_KEYS.LOOP, { content: res });
};

export const pinMode = (pin: number, mode: "INPUT" | "OUTPUT") => {
  res += transpile(TRANSPILE_KEYS.PIN_MODE, { pin, mode });
};

export const digitalWrite = (pin: number, type: "LOW" | "HIGH") => {
  res += transpile(TRANSPILE_KEYS.DIGITAL_WRITE, { pin, type });
};

export const digitalRead = (pin: number): Variable => {
  const name = random();
  res += transpile(TRANSPILE_KEYS.DIGITAL_READ, { pin, name });
  return new Variable(name);
};

export const equals = (v1: any, v2: any, callback: () => void) => {
  const left = extractName(v1);
  const right = extractName(v2);
  const saveRes = res;
  res = "";

  callback();

  res =
    saveRes +
    transpile(TRANSPILE_KEYS.IF, {
      left,
      right,
      operator: "==",
      content: res,
    });
};

export const compile = () => res;
