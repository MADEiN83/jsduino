type VariableTypes = "int" | "char";

class JSDuinoVariable {
  public name: string;
  public type: VariableTypes;

  constructor(name: string, type: VariableTypes) {
    this.name = name;
    this.type = type;
  }
}

export default JSDuinoVariable;
