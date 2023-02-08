require('dotenv').config();
const mongoose = require('mongoose');
const connectionStr =`mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PW}@cluster0.vlwnfcq.mongodb.net/ecommerce?retryWrites=true&w=majority`;

mongoose.connect(connectionStr,{useNewUrlparser:true})
.then(() => console.log('connect to mongodb'))
.catch(err => console.log(err))