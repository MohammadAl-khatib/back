`use strict`;

const mongoose = require('mongoose');

const favSchema = new mongoose.Schema({
    email:String,
    favs:Object
})

const faveModel = new mongoose.model('fav',favSchema);

module.exports = {faveModel};