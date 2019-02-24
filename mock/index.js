const express = require('express');

const app = express();
const port = 3000;
function allowCrossDomain(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header(
    'Access-Control-Allow-Headers',
    'Access-Control-Allow-Origin,Access-Control-Allow-Method,Content-Type',
  );
  next();
}
app.use(allowCrossDomain);
app.get('/sample', (req, res) => res.send({ name: 'parijat' }));

app.listen(port, () => console.log(`Mock Server started on port ${port}!`));
