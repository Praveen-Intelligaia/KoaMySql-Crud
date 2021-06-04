const Koa = require('koa');
require('dotenv').config({path: 'src/.env'})
const app = new Koa();
var Router = require('koa-router');
var koabody =require('koa-body');

var router = new Router();
app.use(koabody());


require('./bootstrap');

// app.use(async ctx => {
//     var response = await db.query('SELECT * FROM user');
//     ctx.body = response;
//   });

router.get('/user',async ctx => {
//    await db.query('SELECT * FROM user',(err, res) => {
//         if(err) {
//             console.log(err)
//         }else{
//             ctx.body = res;
//         }
//     });
        var response = await db.query('SELECT * FROM user')
        ctx.body = response;
})
router.post('/add',async ctx=>{
  var body= ctx.request.body
  console.log(body)

  var response = await db.query(`INSERT INTO user (id,name,age) VALUES("${body.id}","${body.name}","${body.age}")`)
 ctx.body= response;

})
app.listen(3350, function(){
  console.log('Server running on https://localhost:3350')
});
  app
.use(router.routes())
.use(router.allowedMethods());

