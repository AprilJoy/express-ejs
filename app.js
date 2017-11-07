/**
* 引入依赖模块
*/
var express = require( 'express' ),
http = require( 'http' ),
path = require( 'path' );
var routes = require('./routes');
var bodyParser = require('body-parser');

var app = express(),
server = http.Server(app);

app.set('port', process.env.PORT || 3000); //服务启动端口
app.set('views', __dirname + '/views'); //视图文件
app.set('view engine', 'ejs');
app.use( '/', express.static( path.join( __dirname, '/assets' ))); //静态文件路径
app.use( bodyParser.urlencoded({ extended: true }));

routes.all(app);
server.listen(app.get('port'), function(){
  console.log('company server listening on port ' + app.get('port'));
});
server.on('close', function(){
  console.log('close');
});