function requireHTTPS(req, res, next) {
    // The 'x-forwarded-proto' check is for Heroku
    if (!req.secure && req.get('x-forwarded-proto') !== 'https') {
        return res.redirect('https://' + req.get('host') + req.url);
    }
    next();
}
const express = require('express');
const app = express();

app.use(requireHTTPS);
// Serve our static files.
app.use(express.static('./dist/mytasks-front'));
// Wait for a request to any path and redirect all of the requests to index.html
app.get('/*', (req, res) => {
    res.sendFile('index.html', {root: 'dist/mytasks-front/'});
  });

// Listen for requests at the PORT specified by env variables or the default Heroku port, which is 8080.
app.listen(process.env.PORT || 8080);
console.log("End script");