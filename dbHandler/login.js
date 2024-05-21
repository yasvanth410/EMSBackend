const Employee = require('../models/employeeSchema');
const bcrypt = require('bcrypt');
const addAuthLogs = require('./authLogs');
const jwt = require('jsonwebtoken');
const AuthLogs = require('../models/authLogs');

async function getLoginData(args) {
 
    try {
        const { UserName, Password } = args;
        const date = new Date();
    
        const loginResponse = {
            status:0,
            errorMessage:null,
            message:null,
            userId:null,
            username:null,
            token:null
        }
        const employee = await Employee.find({ UserName, IsActive:1, IsDeleted: 0 }).exec();
        if (!employee || employee.length === 0) {

            //loging the login actions
            const authLogFields = new AuthLogs({
                Action: "login",
                ActionMessage:"login failed: unknown user",
                CreatedDate: date.toLocaleDateString() + " "+ date.toLocaleTimeString(),
                Source: "login page",
                IsDeleted:1
            })
            addAuthLogs(authLogFields);

            //sending login responses
            loginResponse.status = 404,
            loginResponse.errorMessage = "Invalid Username/Password. Try again"
            return loginResponse;
        } else {
            if (Password && await bcrypt.compare(Password, employee[0].Password)) {
                //loging the login actions
                const authLogFields = new AuthLogs({
                    UserId: employee[0]._id,
                    UserName: employee[0].UserName,
                    Action: "login",
                    ActionMessage: `login success: ${employee[0].UserName} is logged in successfully`,
                    CreatedBy: employee[0].UserName,
                    CreatedDate:date.toLocaleDateString() + " "+ date.toLocaleTimeString(),
                    Source:"login Page",
                    IsDeleted: 0
                })
                
                addAuthLogs(authLogFields);

                //sending login responses
                const secretKey = process.env.SECRET_KEY
                const payload = {
                    UserId : employee[0]._id
                }
                const jwtToken = jwt.sign(payload, secretKey, {expiresIn:"20m"});
                loginResponse.userId = employee[0]._id,
                loginResponse.role = employee[0].Role,
                loginResponse.username = employee[0].UserName,
                loginResponse.message = `${employee[0].UserName} is logged in successfully`,
                loginResponse.status = 200
                loginResponse.token = jwtToken 

                return loginResponse;
            } else {
                //loging the login actions
                const authLogFields = new AuthLogs({
                    UserId: employee[0]._id,
                    UserName: employee[0].UserName,
                    Action: "login",
                    ActionMessage: `login failed: login credentials are not correct`,
                    CreatedBy: employee[0].UserName,
                    CreatedDate:date.toLocaleDateString() + " "+ date.toLocaleTimeString(),
                    Source:"login Page",
                    IsDeleted: 0
                })


                addAuthLogs(authLogFields);

                //sending login responses
                loginResponse.status = 401,
                loginResponse.username = employee[0].UserName,
                loginResponse.errorMessage = "Invalid username/password "
                return loginResponse;
                // return { status: 201, errorMessage: 'Username / password are not correct'};
            }
        }
    } catch (error) {
        throw error;        
    }
}

module.exports = { getLoginData }