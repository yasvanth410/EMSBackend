const { getLoginData } = require("./dbHandler/login");
const { saveEmployee } = require("./dbHandler/createEmployee");
const saveEmployeeInfo = require("./dbHandler/createEmployeeInfo.js");
const {
  getEmployeeInfo,
  getAllEmployeesInfo,
  getAllManagers,
  getAllTeamLeads
} = require("./dbHandler/employeeInfoById");
const savePermission = require("./dbHandler/createPermission.js");
const saveRole = require("./dbHandler/createRole.js");
const saveAsset = require("./dbHandler/createAsset.js");
const getPermission = require("./dbHandler/getAllPermission.js");
const getAsset = require("./dbHandler/getAllAsset.js");
const getOneAsset = require("./dbHandler/getOneAsset.js");
const getOnePermission = require("./dbHandler/getOnePermission.js");
const getOneRole = require("./dbHandler/getOneRole.js");
const updateAsset = require("./dbHandler/updateAsset.js");
const updateRole = require("./dbHandler/updateRole.js");
const updateEmployeeInfo = require('./dbHandler/updateEmployeeInfo.js');
const updateEmployeeById = require("./dbHandler/updateEmployeeInfoById.js");
const getAllEnumValues = require("./dbHandler/getAllEnumValues.js");
const getHoliday = require("./dbHandler/getAllHoliday.js");
const createDepartment = require('./dbHandler/createDepartment.js');
const createCertificate = require('./dbHandler/createCertificate.js');
const createGoal = require('./dbHandler/createGoal.js');
const getGoalById = require('./dbHandler/getGoalById.js');

const resolvers = {
  Query: {
    employeeLogin: async (parent, args, context, info, next) => {
      try {
        return await getLoginData(args);
      } catch (error) {
        throw new Error(error);
      }
    },
    employeeInfoById: async (parent, args) => {
      try {
        return await getEmployeeInfo(args);
      } catch (error) {
        throw new Error(error);
      }
    },
    goalInfoById: async (parent, args) => {
      try {
        return await getGoalById(args);
      } catch (error) {
        throw new Error(error);
      }
    },
    employeeInfo: async () => {
      try {
        return await getAllEmployeesInfo();
      } catch (error) {
        throw new Error(error);
      }
    },
    managerInfo: async ()=>{
      try {
        return await getAllManagers();
      } catch (error) {
        throw new Error(error);
      }
    },
    teamLeadInfo: async ()=>{
      try {
        return await getAllTeamLeads();
      } catch (error) {
        throw new Error(error);
      }
    },
    getPermission: async (parent, args) => {
      try {
        return await getPermission();
      } catch (error) {
        throw new Error(error);
      }
    },
    getAsset: async (parent, args) => {
      try {
        return await getAsset();
      } catch (error) {
        throw new Error(error);
      }
    },
    getOneAsset: async (parent, args) => {
      try {
        return await getOneAsset(args);
      } catch (error) {
        throw new Error(error);
      }
    },
    getOnePermission: async (parent, args) => {
      try {
        return await getOnePermission(args);
      } catch (error) {
        throw new Error(error);
      }
    },
    getOneRole: async (parent, args) => {
      try {
        return await getOneRole(args);
      } catch (error) {
        throw new Error(error);
      }
    },
    getAllEnumValues: async (parent, args) => {
      try {
        return await getAllEnumValues();
      } catch (error) {
        throw new Error(error);
      }
    },
    getAllHoliday: async (parent, args) => {
      try {
        return await getHoliday();
      } catch (error) {
        throw new Error(error);
      }
    },
  },
  Mutation: {
    createEmployee: async (parent, args, context, info, next) => {
      try {
        return await saveEmployee(args);
      } catch (error) {
        throw new Error(error);
      }
    },
    createEmployeeInfo: async (_, args) => {
      try {
        return await saveEmployeeInfo(args);
      } catch (error) {
        throw new Error(error);
      }
    },
    createPermission: async (parent, args) => {
      try {
        return await savePermission(args);
      } catch (error) {
        throw new Error(error);
      }
    },
    createRole: async (parent, args) => {
      try {
        return await saveRole(args);
      } catch (error) {
        console.log("h");
        throw new Error(error);
      }
    },
    createAsset: async (parent, args) => {
      try {
        return await saveAsset(args);
      } catch (error) {
        throw new Error(error);
      }
    },
    createCertificate: async(parent, args)=>{
      try {
        return await createCertificate(args);
      } catch (error) {
        throw new Error(error);
      }
    },
    createGoal: async(parent, args)=>{
      try {
        return await createGoal(args);
      } catch (error) {
        throw new Error(error);
      }
    },
    updateAsset: async (parent, args) => {
      try {
        return await updateAsset(args);
      } catch (error) {
        throw new Error(error);
      }
    },
    updateRole: async (parent, args) => {
      try {
        return await updateRole(args);
      } catch (error) {
        throw new Error(error);
      }
    },
    updateEmployeeInfo: async(_, args)=>{
      try{
        const {UserId, Username,input} = args
        // console.log(args);
        return await updateEmployeeInfo(UserId, Username, input);
      } catch (error) {
        throw new Error(error);
      }
    },
    updateEmployeeInfoById: async(_, args)=>{
      try {
        const {_id, Username,input} = args
        console.log("Hhhq");
        return await updateEmployeeById(_id, Username, input);
      } catch (error) {
        throw new Error(error);
      }
    },
  },
};

module.exports = { resolvers };
