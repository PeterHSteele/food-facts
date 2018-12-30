const express=require('express')
const bodyParser=require('body-parser')
const mongoose=require('mongoose')
const env=require('dotenv').config()
const Products=require('./schemas/ProductSchema.js')
const cors=require('cors')
const routes=require('./routes.js')

const app=express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json())
app.use(express.static('/'))
app.use(cors())

mongoose.connect(process.env.DB)

routes(app);

app.listen('3000',function(){
	console.log('listening on 3000')
})

