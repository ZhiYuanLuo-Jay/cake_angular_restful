
module.exports = function(mongoose){
    var CakeSchema = new mongoose.Schema({
        name: { type: String },
        image_url: { type: String, default: "" },
        rating: {type: Number, default: 5},
        comment: {type: String},
        }, { timestamps: true })
    mongoose.model('Cake', CakeSchema); 
}
