/**
- Title
- Content
- User (posted by)
- Like 
- Image upload 
- Category/Tags/keywords 
- Audit history
	- user 
	- timestamp 
*/

const mongoose = require("mongoose");
import { commentSchema } from "./CommentModel";

const blogSchema = mongoose.Schema({
	title: {
		type: String,
		required: true
	},
	content: {
		type: String, 
		required: true
	},
	author: {
		type: [{types: mongoose.Schema.Types.ObjectId, ref: "User"}], // come back later and replace this with a Mongoose object ID 
		required: true
	},
	likes: {
		type: [{types: mongoose.Schema.Types.ObjectId, ref: "User"}], // come back later and replace this with a Mongoose object ID ,
		required: false
	},
	headerImage: {
		type: String, // URL to the file/image storage provider 
		required: true
	},
	tags: { // keywords defined by the blog post author
		type: [String], // ["life", "travel", "photography"]
		required: true
	},
	categories: { // post category defined by website admin/developer 
		type: [String], // ["life", "travel", "photography"]
		enum: ["life", "travel", "photography", "coding"],
		required: true
	},
	editHistory: {
		type: [{user: String, timestamp: Date}],
		required: false
	},
	commentsAsObj: {
		type: [{userId: {type: mongoose.Schema.Types.ObjectId, ref: "User"}, content: {type: String}}]
	},
	comments: {
		type: [commentSchema]
	}
},
{
	timestamps: true
});

const BlogModel = mongoose.model("Blog", blogSchema);

module.exports = {
	BlogModel
}