const EnumValues = require("../models/enumValues");

async function getEnumValues() {
  try {
    const enumValues = await EnumValues.find();
    console.log(enumValues);
    if (!enumValues || enumValues.length === 0) {
      throw new Error("Enum Values not found");
    }
    return enumValues;
  } catch (error) {
    throw error;
  }
}

module.exports = getEnumValues;
