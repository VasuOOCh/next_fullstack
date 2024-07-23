import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        min: 3,
        max: 20
    },
    email: {
        type: String,
        required: true,
        unique: true,
        max: 50
    },
    password: {
        type: String,
        required: true,
        min: 6,
        max: 20
    },
    img: {
        type: String,
        default: 'https://images.pexels.com/photos/4009599/pexels-photo-4009599.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    isAdmin: {
        type: Boolean,
        default: false
    }
}, { timestamps: true });


const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        min: 3,
        max: 20
    },
    desc: {
        type: String,
        required: true,
        max: 500
    },
    img: {
        type: String,
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    slug: {
        unique: true,
        type: String,
        required: true
    }
}, { timestamps: true });

const User = mongoose.models.User || mongoose.model("User", userSchema)
const Post = mongoose.models.Post || mongoose.model("Post", postSchema)
export { User, Post };