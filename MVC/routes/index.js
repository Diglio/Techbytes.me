var express = require('express');
var router = express.Router();
var recaptcha = require('express-recaptcha')
var ctrlTechBytes = require('../controllers/welcome');
var ctrlMessage = require('../controllers/messages.js')


//ReCaptcha MiddleWare
recaptcha.init('6LckTSEUAAAAAFnv4Jm1zhHDbUVwjGn11s4QrB0q', '6LckTSEUAAAAAJdldT0xOu7SOq0SE0Idywfsguzu');
verify = function (req, res, next){
  self.verify(req,function(error){
    req.recaptcha = {error:error};
    next();
  });
}


router.get('/', ctrlTechBytes.homepage);
router.get('/calendar', ctrlTechBytes.calendar)
router.post('/', ctrlMessage.messageSubmitted);

module.exports = router;
