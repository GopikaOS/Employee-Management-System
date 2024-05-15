var http = require('http');
var server = http.createServer(function(req,res){
    var users = [{"id":1,name:"manu"}]
    res.end(JSON.stringify(users));

});
server.listen(6003,()=>{
    console.log("server is up and running in port 6003")})
