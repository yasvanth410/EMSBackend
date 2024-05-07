function checkAuth(req, res, next){
    
    console.log(req, "1234");
    next()
}

module.exports = checkAuth