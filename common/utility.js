class Utility {
  constructor() {}

  static getEnvVar(name, defaultVal = "") {
    return process.env[name] ? process.env[name] : defaultVal;
  }
}

export default Utility