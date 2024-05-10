const Asset = require("../models/asset");

async function getOneAsset(args) {
  try {
    const { _id } = args;
    const asset = await Asset.findOne({
      _id: _id,
      IsActive: 1,
      IsDeleted: 0,
    });
    if (!asset || asset.length === 0) {
      throw new Error("Asset not found");
    }
    return asset;
  } catch (error) {
    throw error;
  }
}

module.exports = getOneAsset;
