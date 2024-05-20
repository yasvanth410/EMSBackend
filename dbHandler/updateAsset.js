const Asset = require("../models/asset");

async function updateAsset(args) {
  // console.log(args);
  try {
    const { input } = args;
    const _id = input._id;
    const date = new Date();
    input.UpdatedDate =
      date.toLocaleDateString() + " " + date.toLocaleTimeString();
    const asset = await Asset.findByIdAndUpdate(_id, input, {
      new: true,
    });
    if (!asset || asset.length === 0) {
      throw new Error("Asset not found");
    }
    return asset;
  } catch (error) {
    throw error;
  }
}

module.exports = updateAsset;
