class Converter {
  private setupContent: string;
  private loopContent: string;
  public type: "setup" | "loop";

  constructor() {
    this.setupContent = "";
    this.loopContent = "";
    this.type = "setup";
  }

  public append = (content: string) => {
    switch (this.type) {
      case "setup":
        this.setupContent += content;
        break;
      case "loop":
        this.loopContent += content;
        break;
    }
  };

  public compile = () => `${this.setupContent}${this.loopContent}`;
}

export default Converter;
