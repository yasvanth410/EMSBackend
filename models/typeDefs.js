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
const updateEmployeeInfo = require("../graphqlQuery/updateEmployeeInfo");
const getAllEmployeeInfo = require("../graphqlQuery/getAllEmployeeInfo");

const typeDefs = gql`
  scalar Date

  type Query {
    ${login}
    ${getEmployeeInfoById}
    ${getAllEmployeeInfo}
    getPermission: [Permission]
    getAsset: [Asset]
    getOneAsset(_id: String): Asset
    getOnePermission(_id: String): Permission
    getOneRole(_id: String): Role
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
      AssetName: String
      AssetModel: String
      AssetType: String
      Memory: String
      Processor: String
      OperatingSystem: String
      Warranty: String
      AssetTag: String
      SerialNumber: String
      Description: String
      Addon: String
      IsWorkable: Int
      CreatedBy: String
    ): Asset

    updateAsset(input: AssetInput): Asset
    updateRole(input: RoleInput): Role
    ${createEmployee}
    ${createEmployeeInfo}
    ${updateEmployeeInfo}
  }

  ${employeeInfo}

  

  ${employeeInfoQuery}
  ${permissionInfo}
  ${roleInfo}
  ${assetInfo}
    ${employeeInfo}
    ${employeeLoginResponse}
`;

module.exports = { typeDefs };
