const express = require('express');
const pathToMock = './mock'
const fs = require('fs');

const app = express();

let trueRoute = express.Router();

// Creating the routes
trueRoute.get('/id', (req, res) => {
  console.log(req.params)
  res.json({asd: 'asd'});
});

// Setting the routes and middle ware
app.use('/:id?', (req, res, next) => {
  if (!req.params.id) {
    return res.status(401).json({
      message: 'You need to authenticate first.',
      status: 401
    });
  } else {
    try {
      if (!fs.existsSync(`${pathToMock}/${req.params.id}.json`)) {
        fs.writeFileSync(`${pathToMock}/${req.params.id}.json`, '[]');
      }
    } catch (error) {
      return res.status(500).json({
        message: 'Unexpected Error',
        status: 500,
        error
      });
    }
  }
  next();
}, trueRoute);

app.listen(3000);