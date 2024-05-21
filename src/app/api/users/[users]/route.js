import { NextResponse } from "next/server";

export function GET(){

}
export function DELETE(request,params){
    const {userid}=params;
    console.log("userid",userid);

return NextResponse.json();
}