const express = require('express');
const cors = require('cors');
const app = express();
const http = require('http');
require('dotenv').config();
const stripe = require('stripe')(process.env.STRIPE_SECRET);
require('./connection')
const server = http.createServer(app);
const {Server} = require('socket.io');
const io = new Server(server, {
  cors: 'http://localhost:3001',
  methods: ['GET', 'POST', 'PATCH', "DELETE"]
})


const User=require('./models/User');
const userRoutes = require('./routes/userRoutes');
const productRoutes =require('./routes/productRoutes');

app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use('/users',userRoutes);
app.use('/products',productRoutes);

server.listen(8080,()=>{

    console.log('server running at port' , 8080)
})