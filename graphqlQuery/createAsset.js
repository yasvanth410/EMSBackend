const assetInfo = `
type Asset{
    _id : String
    AssetName: String
    AssetModel: String
    AssetType: String
    Memory: String
    Processor: String
    OperatingSystem: String
    Warranty: String
    AssetTag: String
    SerialNumber: String
    AssignDate: String
    DischargeDate: String
    AssetPurchaseDate: String
    AssetStatus: String
    Cost: String
    Supplier: String
    Description: String
    Addon: String
    IsWorkable: Int
    CreatedBy: String
    CreatedDate: String
    UpdatedBy: String
    UpdatedDate: String
    IsActive: Int
    IsDeleted: Int
    Message: String
}

input AssetInput{
    AssetName: String
    AssetModel: String
    AssetType: String
    Memory: String
    Processor: String
    OperatingSystem: String
    Warranty: String
    AssetTag: String
    SerialNumber: String
    AssignDate: String
    DischargeDate: String
    AssetPurchaseDate: String
    AssetStatus: String
    Cost: String
    Supplier: String
    Description: String
    Addon: String
    IsWorkable: Int
    CreatedBy: String
    CreatedDate: String
    UpdatedBy: String
    UpdatedDate: String
    Message: String
    AssignTo: String
}
`;

module.exports = assetInfo;
