const Asset = require("../models/asset");

async function getAsset() {
  try {
    const assets = await Asset.find({ IsDeleted: 0 });
    if (!assets || assets.length === 0) {
      throw new Error("Assets not found");
    }
    return assets;
  } catch (error) {
    throw error;
  }
}

module.exports = getAsset;
