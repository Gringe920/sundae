
var http = require('http');
var url = require('url');

function start(route, handle){
    function onRequest(req, resp){
        var pathname = url.parse(req.url).pathname;
        var postData = '';
        req.setEncoding('utf-8');
        req.addListener('data', function(postDataChunk){
            postData += postDataChunk;
            console.log('You had received Post data chuck' + postDataChunk);
        });
        req.addListener('end', function(){
            route(handle, pathname, resp, postData);
        })
        
        // resp.writeHead(200, {"Content-Type": "text-plain"});
        // resp.write('hello node-app');
        // resp.end();
    };
    http.createServer(onRequest).listen(8081);
}


exports.start = start;

