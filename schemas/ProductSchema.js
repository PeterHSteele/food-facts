const mongoose=require('mongoose')
const Schema=mongoose.Schema

const productSchema=new Schema({
	name:{type:String,required:true},
	brand:{type:String,required:true},
	parent_company:{type:String,required:true},
	grown_or_manufactured:{type:String,required:true},
	imageSrc:String
})

const Products = mongoose.model('products',productSchema)
module.exports=Products;