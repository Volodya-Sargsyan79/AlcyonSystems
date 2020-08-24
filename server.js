const express = require('express')
const app = express()
const server = require('http').createServer(app);
const path = require('path')
const port = process.env.PORT || 5000
const cors = require('cors')
const morgan = require('morgan')

const transporter = require('./control/nodemailer')



app.use(cors())
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({
    extended: false
}))




    if (process.env.NODE_ENV === 'production') {
  const publicPath = path.join (__dirname, './','client','build');
  app.use (express.static (publicPath));
  app.get ('*', (req, res) => { 
       
      res.sendFile (path.join (publicPath, 'index.html')); 
   })
    }



app.post('/contact',(req,res)=>{
  const  mailOptions = {
   
    to:'virap100@mail.ru',
    subject: req.body.name,
    html:`<h1>from Contact</h1>
        <h2>user name is ${req.body.name}</h2>.</br> 
        <h3>user phone ${req.body.phone} </h3>
       <h4> ${req.body.name} email  ${req.body.email}</h4>
         <p>${req.body.name} message : ${req.body.description}</p>`
  };

  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
      return res.json({err:error})
    } else {
      console.log('Email sent: ' + info.response);
      res.status(200).json({message:'mail sended succssefuly'});
    }
   });
  
}) 
app.post('/cariers',(req,res)=>{
  const user = req.body.message;
  
  
  const  mailOptions = {
   
    to:'virap100@mail.ru',
    subject: req.body.name,
    html:`<h1>from cariers</h1>
        <h2>user name is ${user.name}</h2>.</br> 
        <h3>user phone ${user.phone} </h3>
       <h4> ${user.name} email  ${user.email}</h4>
       <h4> ${user.name} repository link  ${user.link}</h4>
         <p>${user.name} message :${user.description}</p>`
  };

  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
      return res.json({err:error})
    } else {
      console.log('Email sent: ' + info.response);
      res.status(200).json({message:'mail sended succssefuly'});
    }
   });
  
})

app.post('/phplaravel',(req,res)=>{

})


server.listen(port, function () {
  console.log('Server is running on port: ' + port)
});