
const login = `
employeeLogin(UserName:String, Password:String):EmployeeLoginResponse
`;
const employeeLoginResponse = `
type EmployeeLoginResponse{
    message: String
    status: Int
    userId: ID,
    role: String,
    token:String,
    username: String,
    errorMessage: String
}
`;

module.exports = {login, employeeLoginResponse}