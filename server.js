var express = require('express')
var app = express()
var port = process.env.PORT || 5000

app.use(express.static('public'));

apiServer()

app.listen(port, function () {
  console.log('App listening on port ' + port + '.')
})

function apiServer () {
  let user = {
    name: 'User1',
    items: [
      'some',
      'another',
      'one more'
    ]
  };

  app.get('/user', function (req, res) {
    setTimeout(() => {
      res.send(JSON.stringify(user));
    }, Math.abs(Math.random()) * 3)
  });

  app.post('/user', function (req, res) {
    setTimeout(() => {
      user = req.date.user.toJSON();
    }, Math.abs(Math.random()) * 3)
  });
}
