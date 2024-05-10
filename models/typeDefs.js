const gql = require('graphql-tag');
const { GraphQLScalarType } = require('@apollo/server')
const {employeeInfoQuery, createEmployeeInfo} = require('../graphqlQuery/createEmployeeInfo');
const {employeeInfo, createEmployee} = require('../graphqlQuery/createEmployee');
const {login,employeeLoginResponse} = require('../graphqlQuery/loginQuery');
const getEmployeeInfoById = require('../graphqlQuery/employeeInfoById');
const updateEmployeeInfo = require('../graphqlQuery/updateEmployeeInfo');


const typeDefs = gql`
    scalar DateTime

    type Query{
        ${login}
        ${getEmployeeInfoById}
    }

    type Mutation{
      ${createEmployee}
      ${createEmployeeInfo}
      ${updateEmployeeInfo}
    }

    ${employeeInfo}
    ${employeeLoginResponse}
    ${employeeInfoQuery}
`;

module.exports = { typeDefs }