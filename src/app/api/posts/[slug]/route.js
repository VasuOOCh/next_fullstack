import { NextResponse } from 'next/server';
import {connectToDb} from '../../../../lib/utils';
import {Post} from '../../../../lib/models'

export const GET = async (request, {params}) => {
    try {
        connectToDb();
        console.log(params);
        const {slug} = params;
        const post = await Post.findOne({slug});
        return NextResponse.json()
    } catch (error) {
        console.log(error);
        throw new Error("failed to fetch all posts")
    }
}

export const DELETE = async (request, {params}) => {
    try {
        connectToDb();
        const {slug} = params; 
        await Post.deleteOne({slug});
        return NextResponse.json("ok");
    } catch (error) {
        console.log(error);
        throw new Error("failed to delete")
    }
}