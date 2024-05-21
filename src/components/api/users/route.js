import connectDB from "@/db";
import { NextResponse } from "next/server";
connectDB();
export function GET(){
    const users=[
        {
            name:"piyush garg",
            phone:"5644567",
            course:"java"
        },
        {
            name:"piyush",
            phone:"5644567",
            course:"C++"
        },
        {
            name:"Abdullah garg",
            phone:"5644567",
            course:"Python"
        },
    ];
    return NextResponse.json(users);
}
export function POST(){
    

}
export function DELETE(request){
    console.log("deleted");
    return NextResponse.json({
        messsage:"deleted",
        status:"true",

    } ,{status:201, statusText:"confirm"}
);
   


}