import { NextResponse } from 'next/server';
import {connectToDb} from '../../../lib/utils';
import {Post} from '../../../lib/models'

export const GET = async (request) => {
    try {
        console.log(request);
        connectToDb();
        const posts = await Post.find();
        return NextResponse.json(posts)
    } catch (error) {
        console.log(error);
        throw new error("failed to fetch all posts")
    }
}