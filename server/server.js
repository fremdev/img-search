const path = require('path');
const express = require('express');

const routes = require('./routes/routes');
const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
const app = express();

app.use(express.static(publicPath));
app.use('/', routes);

app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
