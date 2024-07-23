import { NextResponse } from 'next/server';
import {connectToDb} from '../../../../lib/utils';
import {User} from '../../../../lib/models'

export const GET = async (request, {params}) => {
    try {
        connectToDb();
        const {id} = params;
        const user = await User.findById(id);
        return NextResponse.json(user)
    } catch (error) {
        console.log(error);
        throw new Error("failed to fetch single user")
    }
}