const express = require('express');
const path = require('path');
const app = express();

// Serve static files from the Angular app
app.use(express.static(path.join(__dirname, 'dist/ubold-angular')));

// For all GET requests, send back index.html
// so that PathLocationStrategy can be used
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'dist/ubold-angular/index.html'));
});

// Use a different port, e.g., 3000
const port = process.env.PORT || 4200;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
