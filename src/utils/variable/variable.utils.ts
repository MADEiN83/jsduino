import { Variable } from "../../core/components";

export const random = (length: number = 4): string => {
  let result = "";
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0";
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};

export const extractName = (value: any): any => {
  return value instanceof Variable ? (value as Variable).name : value;
};
