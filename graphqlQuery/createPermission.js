const permissionInfo = `
type Permission{
    _id : String
    Name : String
    CreatedBy : String 
    CreatedDate : String
    UpdatedBy : String
    UpdatedDate : String
    IsActive : Int
    IsDeleted : Int
}

input PermissionInput{
    _id : String
    Name : String
    CreatedBy : String 
    CreatedDate : String
    UpdatedBy : String
    UpdatedDate : String
    IsActive : Int
    IsDeleted : Int
}
`;

module.exports = permissionInfo;
