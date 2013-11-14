var Client = require('node-rest-client').Client;
client = new Client();

exports.noticias = function(req, res){
	client.get("http://snapi.aws.af.cm/informante", function(data, response){
		res.send(data)
	});
}

exports.noticiasId = function(req, res){
	var id = req.params.id;
	client.get("http://snapi.aws.af.cm//informante/nota/" + id , function(data, response){
		res.send(data)
	});
}