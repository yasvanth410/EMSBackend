const gql = require('graphql-tag');
const { GraphQLScalarType } = require('@apollo/server')
const employeeInfoQuery = require('../graphqlQuery/createEmployeeInfo');
const employeeInfo = require('../graphqlQuery/createEmployee');

const typeDefs = gql`
    scalar DateTime

    type Query{
        employeeLogin(UserName:String, Password:String):EmployeeLoginResponse
        employeeInfoById(UserId: String):EmployeeInfo 
    }

    type Mutation{
        createEmployee( 
            UserId:String
            FirstName:String
            LastName:String
            UserName:String
            Email:String
            Password:String
            Role:String
            CreatedBy:String
            UpdatedBy:String
            IsActive: Int
            IsDeleted: Int
        ): Employee

        createEmployeeInfo( input: EmployeeInfoInput ): EmployeeInfo
    }

    ${employeeInfo}
    type EmployeeLoginResponse{
        message: String
        status: Int
        userId: ID,
        token:String,
        username: String,
        errorMessage: String
    }

    ${employeeInfoQuery}
`;

module.exports = { typeDefs }