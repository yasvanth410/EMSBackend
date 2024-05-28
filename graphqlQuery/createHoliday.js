const holidayInfo = `
type Holiday{
    Dates: [String]
    CreatedBy: String
    CreatedDate: String
    UpdatedBy: String
    UpdatedDate: String
    IsActive: Int
    IsDeleted: Int
}

input HolidayInput{
    Dates: [String]
    CreatedBy: String
    CreatedDate: String
    UpdatedBy: String
    UpdatedDate: String
    IsActive: Int
    IsDeleted: Int
}
`;

module.exports = holidayInfo;
