const express = require('express');
const path = require('path');
const app = express();

// Serve static files from the Angular app's src directory
app.use(express.static(path.join(__dirname, 'ubold_angular', 'src')));

// Send all requests to index.html
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'ubold_angular', 'src', 'index.html'));
});

// Start the app by listening on the default port
const port = process.env.PORT || 4200;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
