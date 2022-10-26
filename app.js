var http=require("http");
var url=require('url');
var queryString=require("querystring");
var httpServer=http.createServer(function (req,resp){
    console.log(url.parse(req.url).path);
    query=url.parse(req.url).query;
    params=query=queryString.parse(query);
    nom=params['nom'];
    resp.writeHeader(200,{'content-type': 'text/html'});
    resp.end("<h2>Bonjour Mr "+nom+"</h2>");
    console.log(params['nom']);

});
httpServer.listen(8899,function (){


    console.log("Node server started");
});