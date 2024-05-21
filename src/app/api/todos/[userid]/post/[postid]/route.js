//to fetch dynamic posts or post data

export function GET(request,{params}){
   return  NextResponse.json(params);

}