exports.getEntries = function(req, res) {

};

exports.postEntry = function(req, res) {

};

exports.getPhrases = function(req, res) {

};

exports.redirect = function(req, res) {
  console.log("invalid url, redirecting to 404");
  res.redirect('/#/404.html');
};

exports.reject = function(req, res) {

};