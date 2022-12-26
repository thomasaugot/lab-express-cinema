const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const filmSchema = new Schema(
    {
        title: String,
        director: String,
        stars: String,
        image: String,
        showtimes: String,
    }
);

module.exports = model("Drone", droneSchema);
