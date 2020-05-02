declare const LOW = "LOW";
declare const HIGH = "HIGH";
declare const OUTPUT = "OUTPUT";
declare const INTPUT = "INTPUT";

declare type OUTPUT_INPUT = "OUTPUT" | "INPUT";
declare type LOW_HIGH = "LOW" | "HIGH";

declare function pinMode(pin: number, mode: OUTPUT_INPUT): void;
declare function digitalWrite(pin: number, type: LOW_HIGH): void;
declare function delay(time: number): void;
