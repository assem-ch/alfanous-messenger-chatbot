var express = require('express')
var app = express()


var TOKEN = "token"
app.get('/webhook', function(req, res) {
  if (req.query['hub.mode'] === 'subscribe' &&
      req.query['hub.verify_token'] === TOKEN) {
    console.log("Validating webhook");
    res.status(200).send(req.query['hub.challenge']);
  } else {
    console.error("Failed validation. Make sure the validation tokens match.");
    res.sendStatus(403);
  }
});


app.get('/', function (req, res) {
  res.send('Salam')
})

var PORT = process.env.PORT || 8080;
var HOST = process.env.HOST || '0.0.0.0';

app.listen(PORT, HOST, () => {
      console.log('listening...');
});