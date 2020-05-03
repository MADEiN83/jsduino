import * as chevrotain from "chevrotain";

const createToken = chevrotain.createToken;

export enum TOKEN_TYPES {
  IF = "IF",
  PARENTHESIS = "PARENTHESIS",
  BRACKETS = "BRACKETS",
  LOW_HIGH = "LOW_HIGH",
  INPUT_OUTPUT = "INPUT_OUTPUT",
  OPERATORS = "OPERATORS",
  METHODS = "METHODS",
  SEMICOLON = "SEMICOLON",
  FUNCTION = "FUNCTION",
  SETUP_LOOP = "SETUP_LOOP",
  CONST_LET = "CONST_LET",
  //
  NUMBERS = "NUMBERS",
  STRING = "STRING",
  TEST = "TEST",
}

const tokens: chevrotain.ITokenConfig[] = [
  { name: TOKEN_TYPES.TEST, pattern: /(\w+).map/ },
  { name: TOKEN_TYPES.IF, pattern: /if/ },
  { name: TOKEN_TYPES.PARENTHESIS, pattern: /\(|\)/ },
  { name: TOKEN_TYPES.BRACKETS, pattern: /\{|\}/ },
  { name: TOKEN_TYPES.BRACKETS, pattern: /\[|\]/ },
  { name: TOKEN_TYPES.LOW_HIGH, pattern: /LOW|HIGH/ },
  { name: TOKEN_TYPES.OPERATORS, pattern: /INPUT|OUTPUT/ },
  { name: TOKEN_TYPES.OPERATORS, pattern: /==|!=|<|<=|>|>=|=/ },
  {
    name: TOKEN_TYPES.METHODS,
    pattern: /Serial.println|pinMode|digitalWrite|digitalRead|delay/,
  },
  { name: TOKEN_TYPES.SEMICOLON, pattern: /;|,/ },
  { name: TOKEN_TYPES.FUNCTION, pattern: /function/ },
  { name: TOKEN_TYPES.SETUP_LOOP, pattern: /setup|loop/ },
  { name: TOKEN_TYPES.CONST_LET, pattern: /const|let/ },
  //
  { name: TOKEN_TYPES.NUMBERS, pattern: /[0-9]+/ },
  { name: TOKEN_TYPES.STRING, pattern: /(\w)+/ },
  //
];

export default tokens.map((token) => createToken(token));
