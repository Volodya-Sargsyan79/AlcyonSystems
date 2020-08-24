const express = require('express');
const emailer = express.Router();
const transporter = require('../control/nodemailer')



emailer.post('/ss', (req,res)=>{
    console.log(req.body, '---------------------');
    
const mailOptions = {
   
    to:'virap100@mail.ru',
    subject: req.body.name,
    text:`user name is ${req.body.name} user phone ${req.body.phone}
    ${req.body.name} email  ${req.body.email}
    ${req.body.name} message ${req.body.description}`
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




module.exports = emailer;