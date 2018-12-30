const mongoose=require('mongoose')
const Products=require('./schemas/ProductSchema.js')

module.exports=function(app){

	app.route('/')
		.post(function(req,res){
			console.log('post')
			console.log(req.body)
			let addProduct = function(name,brand,parent_company,grown_or_manufactured){
				let product=new Products({
					name:name,
					brand:brand,
					parent_company:parent_company,
					grown_or_manufactured:grown_or_manufactured
				})
				product.save(function(err,doc){
					if (err){
						console.log(err);res.send(err);
					}else{
						res.json(doc)
					}
				})
			}
			addProduct(req.body.name,req.body.brand,req.body.parent_company,req.body.grown_or_manufactured)
		})

		.get(function(req,res){
			Products.find({},function(err,data){
				if (err){console.log(err);res.send(err)}
				res.json(data[Math.floor(Math.random()*data.length)])
			})
		})

	app.route('/search')
		.post(function(req,res){
			console.log(req.body)
			function searchDocuments(keyword){
				Products.find({$or:[{name:keyword},{brand:keyword},{parent_company:keyword}]},function(err,data){
					if(err){res.send(err)}
						console.log(data)
					res.json(data)
				})
			}
			searchDocuments(req.body.keyword)
		})
}