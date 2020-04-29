const express = require("express");
const graphqlHTTP = require("express-graphql");
const schema = require('./schema/schema');
const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://Rashmi:Rashmi<3127@cluster0-qv1sb.mongodb.net/test?retryWrites=true&w=majority",{ useNewUrlParser: true });
mongoose.connection.once('open',()=>{
    console.log("Connected to database");
})

const app = express();
app.use('/graphql',graphqlHTTP({
    schema,
    graphiql:true
}));

app.listen(4000,()=>{
    console.log("Hello from express");
})