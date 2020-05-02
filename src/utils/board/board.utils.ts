const serialport = require("serialport");
const IO = require("firmata");

class Board {
  private rport: RegExp = /usb|acm|^com/i;

  constructor() {}

  detect = (): Promise<string> => {
    return new Promise((resolve) => {
      serialport.list().then((result) => {
        const ports = result
          .filter((val) => this.rport.test(val.path))
          .map((val) => val.path);
        resolve(ports);
      });
    });
  };

  connect = (port: string) => {
    console.log("About to connect on", port);

    try {
      const io = new IO(
        port,
        function (error) {
          // if (error) {
          //   caught = error;
          // }
          // callback.call(this, caught, caught ? "error" : "ready", io);
        }.bind(this)
      );

      io.name = "Firmata";
      io.defaultLed = 13;
      io.port = port;

      console.log("success :)", io);
    } catch (err) {
      console.log("nope", err);
    }
  };
}

export default Board;
