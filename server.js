var express = require('express')
var app = express()
var path = require('path')
var formidable = require('formidable');
var fs = require('fs');
var compression = require('compression');

app.use(compression())

// serve our static stuff like index.css
app.use(express.static(path.join(__dirname, 'public')))

// state storage stuff
var bodyParser = require('body-parser');
app.use(bodyParser.json({limit: '5mb'}));
app.use(bodyParser.urlencoded({limit: '5mb', extended: true}));

app.post('/store', function(req, res) {
// create an incoming form object
  var form = new formidable.IncomingForm();

  console.log(req.body);

  // specify that we want to allow the user to upload multiple files in a single request
  form.multiples = true;

  // store all uploads in the /uploads directory
  form.uploadDir = path.join(__dirname, '/public/images');

  // every time a file has been uploaded successfully,
  // rename it to it's orignal name
  form.on('file', function(field, file) {
    fs.rename(file.path, path.join(form.uploadDir, file.name));
  });

  // log any errors that occur
  form.on('error', function(err) {
    console.log('An error has occured: \n' + err);
  });

  // once all the files have been uploaded, send a response to the client
  form.on('end', function() {
    res.end('success');
  });

  // parse the incoming request containing the form data
  form.parse(req);
});

app.get('/store', function(req, res) {
  var type = req.query.type;
  var obj = JSON.parse(fs.readFileSync("./tmp/" + type + ".json", 'utf8'));
  res.send(obj);
});

// send all requests to index.html so browserHistory works
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

var PORT = process.env.PORT || 8080
app.listen(PORT, function() {
  console.log('Express server running at localhost:' + PORT)
})


