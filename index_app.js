const express= require('express');
const app=express();
// app.use('/files', express.static(path.join(__dirname, 'image')));
// app.use("/hello", express.static('image'));
app.get('/:name', function(req,res){ //req methods: GET, POST, PUT, DELETE, etc.
  res.send("You say goodbye " + req.params.name + " and I'll say hello");
});

app.listen(2000, function(){
  // var host= server.address().address;
  // var port= server.address().port;
  console.log(" Successfully started the express app");
});
