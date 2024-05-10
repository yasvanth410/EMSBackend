const { getLoginData } = require('./dbHandler/login');
const { saveEmployee } = require('./dbHandler/createEmployee');
const  saveEmployeeInfo  = require('./dbHandler/createEmployeeInfo.js');
const getEmployeeInfo = require('./dbHandler/employeeInfoById');
const updateEmployeeInfo = require('./dbHandler/updateEmployeeInfo.js');

const resolvers = {
    Query: {
        employeeLogin: async (parent, args, context, info, next) => {
            try {
                return await getLoginData(args)
            } catch (error) {
                // console.log("Error Name: ", error.name, "ErrorStatus: ", error.satus || 500, "Error Message: ", error.message, "Error Stack", error.stack);
                throw new Error(error);
            }
        },
        employeeInfoById: async(parent, args)=>{
            try {
               return await getEmployeeInfo(args); 
            } catch (error) {
               throw new Error(error) 
            }
        }
    },
    Mutation: {
        createEmployee: async(parent, args, context, info, next)=>{
            try {
                return await saveEmployee(args);
            } catch (error) {
                throw new Error(error);
                // return error;
            }
        },
        createEmployeeInfo: async(_, args)=>{
            try {
                return await saveEmployeeInfo(args);
            } catch (error) {
                throw new Error(error);
            }
        },
        updateEmployeeInfo: async(_, args)=>{
            try{
                const {UserId, input} = args
                return await updateEmployeeInfo(UserId, input)
            } catch (error) {
                throw new Error(error);
            }
        }
    }
};

module.exports = { resolvers }