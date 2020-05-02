import * as chevrotain from "chevrotain";
import rules, { TOKEN_TYPES } from "./rules";

import * as fs from "fs";

const text = fs.readFileSync(__dirname + "/_demo.ts", "UTF-8");
const SelectLexer = new chevrotain.Lexer(rules);
const lexingResult = SelectLexer.tokenize(text);

const output = lexingResult.tokens.map((token) => {
  const { tokenType, image } = token;
  const value = image.trim();
  const arr: any = {
    [TOKEN_TYPES.STRING]: `${value}`,
    [TOKEN_TYPES.CONST_LET]: `var `,
    // [TOKEN_TYPES.SEMICOLON]: value,
    // [TOKEN_TYPES.OPERATORS]: value,
    // [TOKEN_TYPES.NUMBERS]: value,
    [TOKEN_TYPES.FUNCTION]: "void ",
    // [TOKEN_TYPES.SETUP_LOOP]: value,
    // [TOKEN_TYPES.LOW_HIGH]: value,
    // [TOKEN_TYPES.INPUT_OUTPUT]: value,
    // [TOKEN_TYPES.PARENTHESIS]: value,
    // [TOKEN_TYPES.BRACKETS]: value,
    // [TOKEN_TYPES.METHODS]: value,
  };

  if (tokenType.name === TOKEN_TYPES.TEST) {
    console.log(token);
  }

  return Object.keys(arr).includes(tokenType.name)
    ? arr[tokenType.name]
    : value;
});

console.log("****");
console.log("****");
console.log(output.join(""));
console.log("****");
console.log("****");
