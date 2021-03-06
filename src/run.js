var http = require("http");
var log = require("./log.js");
var handle = require("./handle.js");
var request = require("./request.js");
var response = require("./response.js");
module.exports = (port, ip) => {
  log("======= Elto =======", "blue");
  var server = http.createServer(function(req, res) {
    handle(request(req), response(res));
  });
  server.listen(port ? port : 3000, ip ? ip : "0.0.0.0");
}
