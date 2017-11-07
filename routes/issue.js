//get 方法
function register(req, res){ //定义register注册转向
  res.render( 'issue/register.ejs' );
}

//post 方法
function registerUser(req, res){
  var dd = req.body;
  console.log('sss')
  console.log(dd);
  //res.json(req.body);
  res.send( { code: 0, msg: 'register info access success',data: req.body } );
  //这里原本是要处理数据库存储操作，这里先走通ajax通信，验证能成功获取数据
}

function about(req, res){ //定义about注册转向
  var param = {
        name: req.query.name,
        id: req.query.id
      }
  res.render('issue/about.ejs', param);
}

module.exports = { //对外公开接口
  register: register,
  registerUser: registerUser,
  about: about
}