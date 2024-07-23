import { Post, User } from "./models"
import {connectToDb} from './utils'
import { unstable_cache as noStore } from "next/cache";

export const getPosts = async() => {
    try {
        await connectToDb();
        const posts = await Post.find();
        // console.log(posts);
        return posts;
    } catch (error) {
        console.log(error);
        throw new Error("Error in fetching posts")
    }
}

export const getPost = async(slug) => {
    // noStore();
    try {
        await connectToDb();
        const post = await Post.findOne({
            slug
        });
        // console.log(post);
        return post;
    } catch (error) {
        console.log(error);
        throw new Error("Error in fetching single post")
    }
}

export const getUser = async(id) => {
    try {
        await connectToDb();
        const user = await User.findOne(id);
        // console.log(user);
        return user;
    } catch (error) {
        console.log(error);
        throw new Error("Error in fetching single user")
    }
}


export const getUsers = async(id) => {
    try {
        await connectToDb()
        const users = await User.find();
        // console.log(users);
        return users;
    } catch (error) {
        console.log(error);
        throw new Error("Error in fetching all users")
    }
}