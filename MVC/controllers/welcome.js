module.exports.loading = function(req,res)   {
      res.render('loading');
      console.log('loading Techbytes')
  };
  var sendJsonResponse = function(res, status, content) {
    res.status(status);
    res.json(content);
  };


  module.exports.homepage = function(req,res)   {
        res.render('index');

        console.log('TechBytes Loaded Succesfully')
    };
    module.exports.calendar = function(req,res)   {
          res.render('calendar');

          console.log('Calendar App was Launched')
      };
