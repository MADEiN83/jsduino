import { Variable } from "../../core/jsduino.core";

export const random = (length: number = 4): string => {
  var result = "";
  var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};

export const extractName = (value: any): any => {
  return value instanceof Variable ? (value as Variable).name : value;
};
