const Digiman = require('../models/digiman')

function index(req, res, next) {

    console.log(req.time)

    res.render('digimon/index.ejs', {
        digimon: Digiman.getAll()
    });
  }

  function show(req, res){
    console.log(req.params, " <- req.params")
    res.render('digimon/show.ejs', {
        digiman: Digiman.getOne(req.params.id)
    })
  }

  function newDigimon(req, res){
    res.render('digimon/new.ejs')
  }

  function create(req, res){

    console.log(req.body, " <- req.body")
    Digiman.create(req.body)


    res.redirect('/digimon');

  }

  function deleteDigiman(req, res){
    Digiman.deleteOne(req.params.id)
    res.redirect('/digimon')
  }

  module.exports = {

    index,
    show,
    new: newDigimon,
    create,
    delete: deleteDigiman
  }