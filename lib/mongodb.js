// import { MongoClient } from 'mongodb';

// const uri = process.env.MONGODB_URI;

// const options = {
//     useNewUrlParser: true
// };

// let client;
// let clientPromise;

// if(!process.env.MONGODB_URI){
//     throw new Error("add Mongo URI to .env.local");
// }

// if(process.env.NODE_ENV === 'development'){
//     if(!global._mongoClientPromise){
//         client = new MongoClient(uri, options);
//         global._mongoClientPromise = client.connect();
//     }
//     clientPromise = global._mongoClientPromise;
// }else{
//     client = new MongoClient(uri, options);
//     clientPromise = client.connect();
// }

// export default clientPromise;




import { MongoClient } from 'mongodb';

const options = {
    "useNewUrlParser": true
};

const uri = process.env.MONGODB_URI;

let client;
let clientPromise;

if(!process.env.MONGODB_URI){
    throw new Error("Configure MongoDB URI in ev file");
}

if(process.env.NODE_ENV === 'Development'){
    if(!global._mongoDBClient){
        client = new MongoClient(uri, options);
        global._mongoDBClient = client.connect();
    }
    clientPromise = global._mongoDBClient;
}else{
    client = new MongoClient(uri, options);
    clientPromise = client.connect();
}

export default clientPromise;