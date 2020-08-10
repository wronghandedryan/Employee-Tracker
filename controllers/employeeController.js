const db = require("../models");


module.exports = {
  findAll: function(req, res) {
    db.employee.find(req.query)
      .sort({ first_name, last_name, title, department, image})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findByfirst_name: function(req, res) {
    //req.params.search =//req.params.info
    //switch then ccreate condition

    
    db.employee.findById(req.params.first_name) /// find  where
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findBylast_name: function(req, res) {
    db.employee.findById(req.params.last_name)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findBytitle: function(req, res) {
    db.employee.findById(req.params.title)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findBydepartment: function(req, res) {
    db.employee.findById(req.params.department)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.employee.create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.employee.findOneAndUpdate({ _first_name: req.params.first_name }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.employee.findOneAndUpdate({ _last_name: req.params.last_name }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.employee.findOneAndUpdate({ _title: req.params.title}, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.employee.findOneAndUpdate({ _department: req.params.department }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.employee.findByfirst_name({ _id: req.params.first_name })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.employee.findBylast_name({ _id: req.params.last_name })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.employee.findBytitle({ _id: req.params.title})
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.employee.findBydepartment({ _id: req.params.department })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
