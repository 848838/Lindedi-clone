const mongoose = require('mongoose');
const mongoURL = "mongodb://localhost:27017"
const connectToMongo = () => {
    mongoose.connect(mongoURL).then(success => console.log("connected")).catch((err) => console.log(err.message));

}
module.exports = connectToMongo;