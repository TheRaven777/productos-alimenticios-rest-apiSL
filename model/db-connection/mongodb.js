// packages

const mongoose=require("mongoose");
const config=require("config");

const mongodbInfo=config.get("db-connections.mongodb");

const connectionString=`mongodb+srv://${mongodbInfo.user}:${mongodbInfo.password}@${mongodbInfo.host}/${mongodbInfo.dbname}?retryWrites=true&w=majority`;

module.exports=()=>{
    mongoose.connect(connStr);

    mongoose.connection.on("connected", ()=>{
        console.log("mongodb server connected!");
    });

    mongoose.connection.on("disconnected", ()=>{
        console.log("mongodb server disconnected!");
    });

    mongoose.connection.on("error", ()=>{
        console.log("mongodb server connection error!");
    });

    mongoose.connection.on("SIGINT", ()=>{
        mongoose.connection.close(()=>{
            console.log("mongodb server shutting down!");
        });
    });
};

// user: productos-alimenticios-rest-api-user
// password: tjX2wBFP4k7ajr50

// connectionString mongodb+srv://productos-alimenticios-rest-api-user:tjX2wBFP4k7ajr50@cluster0.hbbwn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority