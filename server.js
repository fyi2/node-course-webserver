const express = require('express');
const hbs = require('hbs');

var app = express()
hbs.registerPartials(__dirname+`/views/partials`)
app.set('view engine','hbs')
app.use(express.static(__dirname+'/public'))

app.get('/',(request, response) => {
  response.render('home.hbs',{
    pageTitle: 'Home Page',
    currenYear: new Date().getFullYear(),
    welcome: `Hello Tony`
  });
});
app.get('/bad',(request,response)=> {
  response.send({
    message: 'Bad Error'
  });
});

app.get('/about',(request,response)=> {
  response.render('about.hbs',{
    pageTitle: 'About Page',
    currenYear: new Date().getFullYear()
  });
});
app.get('/bad',(request,response)=> {
  response.send({
    message: 'Bad Error'
  });
});

app.listen(3000,()=>{
  console.log('Server is up on port 3000');
});
