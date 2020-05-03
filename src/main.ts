// import * as chevrotain from "chevrotain";
// import rules, { TOKEN_TYPES } from "./rules";

// import * as fs from "fs";

// const text = fs.readFileSync(__dirname + "/_demo.ts", "UTF-8");
// const SelectLexer = new chevrotain.Lexer(rules);
// const lexingResult = SelectLexer.tokenize(text);

// const output = lexingResult.tokens.map((token) => {
//   const { tokenType, image } = token;
//   const value = image.trim();
//   const arr: any = {
//     [TOKEN_TYPES.STRING]: `${value}`,
//     [TOKEN_TYPES.CONST_LET]: `var `,
//     [TOKEN_TYPES.FUNCTION]: "void ",
//   };

//   if (tokenType.name === TOKEN_TYPES.TEST) {
//     console.log("LA!!!!!", token);
//   }

//   return Object.keys(arr).includes(tokenType.name)
//     ? arr[tokenType.name]
//     : value;
// });

// console.log("****");
// console.log("****");
// console.log(output.join(""));
// console.log("****");
// console.log("****");

const five = require("johnny-five");
const board = new five.Board();

const LED_PINS = [13, 12, 11, 10, 9, 8];

board.on("ready", () => {
  const leds = LED_PINS.map((pin) => new five.Led(pin));

  // leds.forEach((l) => l.strobe());

  leds[0].on();
});
