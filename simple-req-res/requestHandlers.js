var exec = require('child_process').exec;
var queryString = require('querystring');

function start(resp, postdata){
    console.log('this is start func logic');
    
    var body = '<html>'+
    '<head>'+
    '<meta http-equiv="Content-Type" content="text/html; '+
    'charset=UTF-8" />'+
    '<style>input[type="submit"]:focus {outline: 0;}</style>'+
    '</head>'+
    '<body>'+
    '<div style="margin: 0 auto;text-align: center;"><form action="/upload" method="post">'+
    '<textarea name="text" rows="20" cols="60" placeholder="请输入非中文吧，因为我转码没搞"></textarea><br/>'+
    '<input type="submit" value="Submit text" style="margin: 20px;padding: 10px 20px;border: 1px solid #ccc;border-radius: 20px;"><br/>'+
    '</div>'+
    '</form>'+
    '</body>'+
    '</html>';

    resp.writeHead(200, {"Content-Type": "text/html"});
    resp.write(body);
    resp.end();
}

function upload(resp, postdata){
    console.log('this is upload func logic');
    resp.writeHead(200, {"Content-Type": "text/html"});
    //resp.setEncoding('utf-8');
    var body = '<div style="text-align:center">'+'you had handle postdata:' + queryString.parse(postdata).text + '</div>';
    resp.write(body);
    resp.end();
}

exports.start = start;
exports.upload = upload;