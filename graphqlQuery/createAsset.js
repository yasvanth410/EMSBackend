const assetInfo = `
type Asset{
    _id : String
    AssetModel: String
    AssetType: String
    Memory: String
    Processor: String
    OperatingSystem: String
    WarrantyStart: String
    WarrantyExpire: String
    AssetTag: String
    SerialNumber: String
    AssignDate: String
    DischargeDate: String
    AssetPurchaseDate: String
    AssetCondition: String
    Cost: String
    Vendor: String
    Description: String
    CreatedBy: String
    CreatedDate: String
    UpdatedBy: String
    UpdatedDate: String
    IsActive: Int
    IsDeleted: Int
    AssignTo:String
}

input AssetInput{
    AssetModel: String
    AssetType: String
    Memory: String
    Processor: String
    OperatingSystem: String
    WarrantyStart: String
    WarrantyExpire: String
    AssetTag: String
    SerialNumber: String
    AssignDate: String
    DischargeDate: String
    AssetPurchaseDate: String
    AssetCondition: String
    Cost: String
    Vendor: String
    Description: String
    CreatedBy: String
    UpdatedBy: String
    UpdatedDate: String
}
`;

module.exports = assetInfo;
