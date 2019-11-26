let mongoose = require('mongoose')

let Schema = mongoose.Schema;

let airlines = ['American','Southwest','United']; 

let cities = ['AUS', 'DAL', 'LAX', 'SAN', 'SEA']




let destinationSchema = new Schema({
    airport:{
        type: String,
        
    },
    arrival:{
        type: Date
    }

});


let flightSchema = new Schema ({
    airline: {
        type: String,
        enum: airlines,
    },
    flightNo: {
        type: Number,
        min: 10,max: 9999,
    },
    departs: {
        type: Date,
        default: Date.now() + (366*24*60*60*1000), 
    },
    airport:{
        type: String,
        enum: cities
    },
    destinations: [destinationSchema],
    
});



module.exports = mongoose.model('Flight',flightSchema);