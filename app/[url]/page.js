import clientPromise from "@/lib/mongodb";
import { redirect } from "next/navigation"

export default async function Page({params}){
    const url = (await params).url;
    console.log(url);

    const client = await clientPromise;
    const db = client.db("bitlinks");
    const collection = db.collection("url");

    const doc = await collection.findOne({shortUrl : url});

    if(doc){
        redirect(doc.url);
    }else{
        redirect(`${process.env.NEXT_PUBLIC_HOST}`)
    }
}