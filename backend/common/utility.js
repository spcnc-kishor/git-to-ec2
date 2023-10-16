class Utility {
  constructor() {}

  static getEnvVar(name, defaultVal = "") {
    return process.env[name] ? process.env[name] : defaultVal;
  }

  static validateSchmea(schemaobj, inputs) {
    const values = schemaobj.validate(inputs);
    if (values.error) {
      throw new Error(values.error.details[0].message);
    }
  }
}

export default Utility;
