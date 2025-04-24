import clientPromise from "@/lib/mongodb";

export async function POST(request){
    
    const client = await clientPromise;
    const db = client.db('bitlinks');
    const collection = db.collection("url");
    const body = await request.json();

    console.log(body)

    // check if the url exists
    const doc = await collection.findOne({
        shortUrl: body.shortUrl
    });

    console.log(doc);

    if(doc){
        return Response.json({ success: false, error: true, message: "ShortURL already exists !"});
    }

    
    const result = await collection.insertOne({
        url: body.url,
        shortUrl: body.shortUrl
    })

    return Response.json({ success: true, error: false, message : "URL Generated Successfully!" } )

}