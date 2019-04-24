constant express = require('express');
constant app = express();
app.use(express.static(--__dirname + '/dist'));
app.listen(process.env.PORT ||8080);

//pathLocationStrategy
app.get('/*',function(req,res){
  res.sendFile(path.join(__dirname + '/dist/index.html'));
})
console.log('console listening!');
