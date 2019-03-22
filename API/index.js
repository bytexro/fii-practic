const express = require('express');
const pathToMock = './mock'
const fs = require('fs');
const bodyParse = require('body-parser');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(bodyParse.json());

let trueRoute = express.Router();

trueRoute.use((req, res, next) => {
  if (!req.query.name) {
    return res.status(401).json({
      message: 'You need to authenticate first.',
      status: 401
    });
  } else {
    try {
      if (!fs.existsSync(`${pathToMock}/${req.query.name}.json`)) {
        fs.writeFileSync(`${pathToMock}/${req.query.name}.json`, '[]');
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
})
// Creating the routes
trueRoute.get('/', (req, res) => {
  res.status(200).json(require(`${pathToMock}/${req.query.name}`));
});

trueRoute.get('/person/:id', (req, res) => {
  let persons = require(`${pathToMock}/${req.query.name}.json`);
  let person = persons.find(person => person.id === +req.params.id);
  res.status(200).json(person);
});

trueRoute.post('/person', (req, res) => {
  let persons = require(`${pathToMock}/${req.query.name}.json`);
  req.body.id = persons.length;
  persons.push(req.body);
  fs.writeFile(`${pathToMock}/${req.query.name}.json`, JSON.stringify(persons), (err) => {
    if (err) {
      return res.status(500).json({
        status: 500,
        message: 'Internal Error',
      });
    }
    res.status(201).json({
      status: 201,
      message: 'Success',
      person: req.body
    });
  });
});

trueRoute.post('/pet/:personId', (req, res) => {
  let persons = require(`${pathToMock}/${req.query.name}.json`);
  let person = persons.find(person => person.id === +req.params.personId);
  if (!person) {
    return res.status('404').json({
      message: 'Person not found',
      status: 404
    });
  }

  if (!person.pets) {
    person.pets = []
  };

  person.pets.push(req.body);
  fs.writeFile(`${pathToMock}/${req.query.name}.json`, JSON.parse(persons), (err) => {
    if (err) {
      return res.status(500).json({
        message: 'Internal Error',
        status: 500
      });
    }

    res.status(201).json({
      message: 'Added a new pet'
    })
  })
});

// Setting the routes and middle ware
app.use('/', trueRoute);

app.listen(3000);