const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
    host: 'smtp.mail.ru',
    port: 465,
    secure: true,
    auth: {
        user: 'virap10@mail.ru',
        pass: '532530122erevan'
    }
  },{
     from: 'Alcyonsystems  <virap10@mail.ru>',
  });


  module.exports = transporter;