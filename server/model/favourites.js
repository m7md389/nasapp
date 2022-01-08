const Mongoose = require("mongoose");
const Schema = Mongoose.Schema;

const favouritesSchema = new Schema({
    title: String,
    image: String
})

const Favourites = Mongoose.model("favourites", favouritesSchema)

module.exports = Favourites;