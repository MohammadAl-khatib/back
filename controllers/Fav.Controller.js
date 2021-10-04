`use strict`;

const  axios  = require("axios");
const {faveModel} = require('../models/Fav.model')

const getData =async (req,res) => {
   let result = await axios.get("https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic");
   res.status(200).json(await result.data)
}

const createFav = async (req,res) => {
    let email = req.query.email;
    let fav = req.body;

    let newFav = new faveModel ({email:email,favs:fav})
    newFav.save();

    res.status(200).json(await faveModel.find({}))
}

const getFav = async (req,res) => {
    res.status(200).json(await faveModel.find({}))
}

const updateFav = async (req,res) => {
    let id = req.params.id
    let item = req.body

    await faveModel.findOne({_id:id}).then(async fav=>{
        fav.favs = item;
        await fav.save();
    })
    res.status(200).json(await faveModel.find({}))
}
const deleteFav = async (req,res)=> {
    let id = req.params.id

    await faveModel.findByIdAndDelete({_id:id})

    res.status(200).json(await faveModel.find({}))
}

module .exports = {getData,createFav, getFav, updateFav, deleteFav}