const Holiday = require("../models/holiday");

async function getHoliday() {
  try {
    const holiday = await Holiday.find();
    // console.log(Holiday);
    if (!holiday || holiday.length === 0) {
      throw new Error("Holiday not found");
    }
    return holiday;
  } catch (error) {
    throw error;
  }
}

module.exports = getHoliday;
