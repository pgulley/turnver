//BlackLivesMatter post model
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var postSchema = new Schema({
	title:String,
	date: Date,
	hashtag: String,
	post: String,
	image: Object
});

mongoose.model("BLMPost", postSchema);
