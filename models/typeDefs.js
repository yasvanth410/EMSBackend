const gql = require("graphql-tag");
const { GraphQLScalarType } = require("@apollo/server");
const permissionInfo = require("../graphqlQuery/createPermission");
const roleInfo = require("../graphqlQuery/createRole");
const assetInfo = require("../graphqlQuery/createAsset");
const {
  employeeInfoQuery,
  createEmployeeInfo,
} = require("../graphqlQuery/createEmployeeInfo");
const {
  employeeInfo,
  createEmployee,
} = require("../graphqlQuery/createEmployee");
const { login, employeeLoginResponse } = require("../graphqlQuery/loginQuery");
const getEmployeeInfoById = require("../graphqlQuery/employeeInfoById");
const {
  updateEmployeeInfo,
  updateEmployeeById,
} = require("../graphqlQuery/updateEmployeeInfo");
const getAllEmployeeInfo = require("../graphqlQuery/getAllEmployeeInfo");
const enumValuesInfo = require("../graphqlQuery/createEnumValues");
const holidayInfo = require("../graphqlQuery/createHoliday");
const {
  department,
  createDepartment,
} = require("../graphqlQuery/CreateDepartment");
const {
  certificateInfo,
  createCertificateInfo,
} = require("../graphqlQuery/certificateTypeDef");
const {
  goalInfo,
  createGoalInfo,
  getGoalInfoById,
} = require("../graphqlQuery/goalTypeDef");

const typeDefs = gql`
  scalar Date

  type Query {
    ${login}
    ${getEmployeeInfoById}
    ${getAllEmployeeInfo}
    ${getGoalInfoById}
    getPermission: [Permission]
    getAsset: [Asset]
    getOneAsset(_id: String): Asset
    getOnePermission(_id: String): Permission
    getOneRole(_id: String): Role
    getAllEnumValues: [EnumValues]
    getAllHoliday: [Holiday]
  }

  type Mutation {
    

    createPermission(Name: String, CreatedBy: String): Permission

    createRole(
      Name: String
      Description: String
      Permission: [String]
      CreatedBy: String
    ): Role

    createAsset(
      AssetModel: String
      AssetType: String
      Memory: String
      Processor: String
      OperatingSystem: String
      WarrantyStart: String
      WarrantyExpire: String
      SerialNumber: String
      AssignDate: String
      AssetPurchaseDate: String
      AssetCondition: String
      Cost: String
      Vendor: String
      Description: String
      CreatedBy: String
      AssignTo: String
    ): Asset

    updateAsset(input: AssetInput): Asset
    updateRole(input: RoleInput): Role
    ${createEmployee}
    ${createEmployeeInfo}
    ${updateEmployeeInfo}
    ${updateEmployeeById}
    ${createDepartment}
    ${createCertificateInfo}
    ${createGoalInfo}
  }

  ${employeeInfo}

  ${department}

  ${employeeInfoQuery}
  ${permissionInfo}
  ${roleInfo}
  ${assetInfo}
  ${employeeInfo}
  ${employeeLoginResponse}
  ${enumValuesInfo}
  ${holidayInfo}
  ${certificateInfo}
  ${goalInfo}
`;

module.exports = { typeDefs };
