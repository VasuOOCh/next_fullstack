'use server'
import { revalidatePath } from "next/cache";
import { Post } from "./models";
import { connectToDb } from "./utils";

export const addPost = async (formData) => {
    try {
        const { title, desc, userId, slug } = Object.fromEntries(formData);
        connectToDb()
        const newPost = new Post({
            title,
            desc,
            userId,
            slug
        })
        await newPost.save();
        revalidatePath('/blogs') //real time update
        // console.log(newPost);
    } catch (error) {
        console.log(error);
        return {
            error : "new error found | something went wrong"
        }
    }

}

export const deletePost = async (formData) => {
    try {
        const { id } = Object.fromEntries(formData);
        connectToDb()
        await Post.findByIdAndDelete(id);
        console.log('data deleted');
        revalidatePath('/blogs'); // real time update
        
    } catch (error) {
        console.log(error);
        return {
            error : "new error found | something went wrong"
        }
    }

}