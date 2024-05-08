import { connectToDB } from "@/lib/database"
import User from "@/lib/database/models/user.models"
import { handleError } from "@/lib/utils"
import { NextRequest, NextResponse } from "next/server"


export const GET = async () => {
    try {
        await connectToDB()
        const user = await User.find()
        return NextResponse.json({ user: user }, { status: 200 });
    } catch (error) {
        handleError(error)
    }
}
export const POST = async (req : NextRequest) => {
    try {
        await connectToDB()
        const {clerkId, email, username, firstName, lastName, photo} = await req.json()
        const user = await User.create({
            clerkId, email, username, firstName, lastName, photo
        })
        return NextResponse.json({ user: user }, { status: 200 });
    } catch (error) {
        handleError(error)
    }
}