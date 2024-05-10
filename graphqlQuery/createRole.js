const roleInfo = `
type Role{
    _id : String
    Name : String
    Description : String
    Permission : [String]
    CreatedBy : String 
    CreatedDate : String
    UpdatedBy : String
    UpdatedDate : String
    IsActive : Int
    IsDeleted : Int
}

input RoleInput{
    _id : String
    Name : String
    Description : String
    Permission : String
    CreatedBy : String 
    CreatedDate : String
    UpdatedBy : String
    UpdatedDate : String
    IsActive : Int
    IsDeleted : Int
}
`;

module.exports = roleInfo;
