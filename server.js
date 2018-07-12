const   bp              = require('body-parser'),
        express         = require('express'),
        helmet          = require('helmet'),
        path            = require('path'),
        app             = express(),
        port            = process.env.PORT || 4998;

const server = app.listen(port, function () {
	console.log(`server running on port ${port}`);
});

// CORS
app.use(function (req, res, next) {
    // Allowing multiple websites to connect
    var allowedOrigins = ['http://localhost:4200'];
    var origin = req.headers.origin;
    if(allowedOrigins.indexOf(origin) > -1){
         res.setHeader('Access-Control-Allow-Origin', origin);
    }
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, content-type, authorization');
    next();
});
app.use(helmet());
app.use(bp.json());
app.use(express.static(path.join(__dirname, 'dist')));  // This is for the front end

const routes = require('./server/config/routes.js')(app);

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './dist/index.html'));  // This is for the front end
});

app.use(function (err, req, res, next) {
  console.log(err);
  res.status(err.status || 500);
  res.json({ message: err.message});
  next(err)
})
