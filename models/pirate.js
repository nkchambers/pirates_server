// Import mongoose
const mongoose = require('mongoose');


// The pirate schema - rules that pirate entries into db must follow
const PirateSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "{PATH} is required"]
    },
    image: {
        type: String,
        required: [true, "{PATH} is required"]
    },
    treasures: {
        type: Number,
        required: [true, "{PATH} is required"]
    },
    catchPhrase: {
        type: String,
        required: [true, "{PATH} is required"]
    },
    crewPosition: {
        type: String,
        required: [true, "{PATH} is required"]
    },
    pegLeg: {
        type: Boolean,
        default: true
    },
    eyePatch: {
        type: Boolean,
        default: true
    },
    hookHand: {
        type: Boolean,
        default: true
    }
}, {timestamps: true})




// Instantiate the pirate schema and export model
// >>> controller will then use pirate schema to make queries to the db & execute CRUD functions
const Pirate = mongoose.model('Pirate', PirateSchema);  


// Exporting pirate model
module.exports = Pirate;
