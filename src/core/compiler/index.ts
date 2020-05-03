import * as fs from "fs";

class Compiler {
  private directoryName = "Export";
  private filename = `${this.directoryName}/Export.ino`;

  public compile = async (content: string) => {
    await this.createDirectory();
    this.createFile(content);
  };

  private createDirectory = () => {
    return new Promise((resolve, reject) => {
      this.removeDirectoryIfExists();

      fs.mkdir(this.directoryName, (err) => {
        if (err) {
          reject(err);
          return;
        }
        resolve();
      });
    });
  };

  private removeDirectoryIfExists = () => {
    if (!this.directoryExists(this.directoryName)) {
      return;
    }

    fs.unlinkSync(this.filename);
    fs.rmdirSync(this.directoryName);
  };

  private directoryExists = (name: string) => fs.existsSync(name);

  private createFile = (content: string) => {
    fs.writeFileSync(`${this.directoryName}/export.ino`, content);
  };
}

export default Compiler;
