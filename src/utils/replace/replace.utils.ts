export enum TRANSPILE_KEYS {
  SETUP,
  LOOP,
  IF,
  ELSE,
  PIN_MODE,
  DIGITAL_WRITE,
  DIGITAL_READ,
  DELAY,
}

const DICO = {
  [TRANSPILE_KEYS.SETUP]: `void setup(){:content}`,
  [TRANSPILE_KEYS.LOOP]: `void loop(){:content}`,
  [TRANSPILE_KEYS.IF]: `if(:left:operator:right){:content}`,
  [TRANSPILE_KEYS.ELSE]: `else{:content}`,
  [TRANSPILE_KEYS.PIN_MODE]: `pinMode(:pin,:mode);`,
  [TRANSPILE_KEYS.DIGITAL_WRITE]: `digitalWrite(:pin,:type);`,
  [TRANSPILE_KEYS.DIGITAL_READ]: `int :name=digitalRead(:pin);`,
  [TRANSPILE_KEYS.DELAY]: `delay(:timeInMs);`,
};

export const transpile = (key: TRANSPILE_KEYS, args: any = {}): string => {
  let value = DICO[key];
  Object.keys(args).forEach(
    (aKey) => (value = value.replace(`:${aKey}`, args[aKey]))
  );
  return value;
};
