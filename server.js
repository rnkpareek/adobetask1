const express = require('express');
const path = require('path');

const app = express();


app.use(express.static(__dirname + '/dist/kart'));

app.get('/*', function(req,res) {
    
res.sendFile(path.join(__dirname+'/dist/kart/index.html'));
});
app.listen(3000,function(){
    console.log('listening port 3000')
  })