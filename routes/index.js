var issue = require('./issue') //引入issue.js文件
exports.all = function(app){
  app.get('/', function(req, res){
    res.render('issue/index.ejs');
  });

  app.get('/register', function (req, res) {
    issue.register(req, res);
  });
  app.post('/register', function (req, res){
    issue.registerUser(req, res);
  });

  app.get('/about', function (req, res) {
    issue.about(req, res);
  });
}