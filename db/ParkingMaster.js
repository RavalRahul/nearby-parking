const mongoose  = require('mongoose');

const parkingSchema = new mongoose.Schema({
    userid: String,
    lat: String,
    lng: String,
    city: String,
    rent: String
});

module.exports = mongoose.model("ParkingMaster", parkingSchema);