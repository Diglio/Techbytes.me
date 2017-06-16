require('../routes/index.js');
var recaptcha = require('express-recaptcha');
var https = require('https');
var mongoose = require('mongoose');
require('../models/db');
var nodemailer = require('nodemailer');
const xoauth2 = require('xoauth2');

let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      type: 'OAuth2',
      user: 'techbytesbot@gmail.com',
      clientId: '208803094077-2d62tmp0k1258n5dl75iiritibbhtd3f.apps.googleusercontent.com',
      clientSecret: '69P7xoLuHoJUSDtCqkSFNBss',
      refreshToken: '1/12pHkPdA2XAzd5Qhi0fDw61jGONDnqByS6qR4CLPmQw'
    }
});
transporter.set('oauth2_provision_cb', (user, renew, callback) => {
    let accessToken = userTokens[user];
    if(!accessToken){
        return callback(new Error('Unknown user'));
    }else{
        return callback(null, accessToken);
    }
});



//This block will send an email to Techbytes Admin stating that Server has started
// var mailServerStarted = {
//   from: 'techbytesbot@gmail.com',
//   to: 'cesar@techbytes.me',
//   subject: 'Server Started',
//   text: 'Techbytes Web Server Either Rebooted or just started. Tested OK.'
// }
//
// transporter.sendMail(mailServerStarted, function(err, res){
//   if (err){
//     console.log('There is an error sending email ' + err);
//   } else {
//     console.log('startup email sent TechBytes Admin');
//   }
// })


//This Block will be used after the message box has been updated
module.exports.messageSubmitted = function(req,res)   {
  // res.render('index');
  var messageSchema = mongoose.Schema({
      name: String,
      email: String,
      message: String
  });
     recaptcha.verify(req, function(error){
         if(!error){
     console.log('reCaptcha Verified');
    console.log('Message Attempted');
      req.checkBody('name', 'Your Name is a required field.').notEmpty();
      req.checkBody('email', 'Your Email is a required field.').notEmpty();
      req.checkBody('message', 'Please Type A Message for me.').notEmpty();
      req.checkBody("email", "Enter a valid email address.").isEmail();

      var errors = req.validationErrors();
      if (errors) {


  console.log('errors on form ')
      } else{

        var newMessage = {
            name: req.body.name,
            email: req.body.email,
            message: req.body.message
          }
      console.log('New Message Submitted');
      var message = mongoose.model('message', messageSchema);
      var sendMessage = new message(newMessage);
        sendMessage.save(function(err, result){
          if(err){
            console.log(err);
            res.render('index');
            console.log('Get TechBytes')
          }else{
            console.log('Message saved in MongoDB')
          }

        })

      }
      //Message sent to TechBytes Admin
      var mailMessageSubmitted = {
        from: 'techbytesbot@gmail.com',
        to: 'cesar@techbytes.me',
        subject: 'New Message from TechBytes',
        html: "<br>"+req.body.name +"<br>"+req.body.email+"<br>"+req.body.message
      }

      transporter.sendMail(mailMessageSubmitted, function(err, res){
        if (err){
          console.log('There is an error sending email ' + err);
        } else {
          console.log('Form Message submitted to TechBytes Admin');
        }
      })
        }
        else{
      res.json('reCaptcha not verified');
      console.log('reCaptcha not verified');
      }
      });
      }
