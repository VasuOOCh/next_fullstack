import { NextResponse } from 'next/server';
import {connectToDb} from '../../../lib/utils';
import {User} from '../../../lib/models'

export const GET = async (request) => {
    try {
        // console.log(request);
        connectToDb();
        const users = await User.find();
        return NextResponse.json("ok")
    } catch (error) {
        console.log(error);
        throw new error("failed to fetch all posts")
    }
}