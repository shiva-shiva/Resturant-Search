var express = require('express');
var router = express.Router();
const foods = require('../models/product');
const orm2 = require( '../config/orm2' );
const orm = require('../config/orm');

var Type
var Price
var Name

router.get('/recipe', function(req, res, next) {
  res.render('recipe/Recipe');
});

router.get('/', function(req, res, next) {

  foods.selectType((type)=>{
    Type = type
  })
  foods.selectPrice((price)=>{
    Price = price
  })
  foods.selectRsturantName((name)=>{
    Name = name
  })
  foods.selectAll((data)=>{
    res.render('food/index', { data: data , type:Type , price:Price, Name:Name});
  })
  
});
router.post('/search',async (req, res, next) =>{
   const search = req.body.searchValue
  results = await orm2.searchResults(search)
  res.render('food/index',{data:results,type:Type, Name:Name});

})

router.post('/',async (req, res, next) =>{
  const search = req.body.searchValue
 results = await orm2.searchResuturant(search)
 res.render('food/index',{data:results, type:Type , Name:Name});

})

router.post('/searchCuisine',async (req, res, next) =>{
const search = req.body.searchValue
 results = await orm2.searchCuisine(search)
 res.render('food/index',{data:results,type:Type, Name:Name});

})


router.get('/newRecipe', function(req, res, next) {
  foods.selectNewRecipe((data)=>{
    res.render('recipe/newRecipe', { data: data});
  })
});

router.post('/newRecipe', function(req, res) {
  console.log( '[newRecipe] req.body: ', req.body );
  const Title = req.body.title.trim();
  console.log("title" +Title)
  const Recipe_link = req.body.RecipeLink.trim();
  const Image = req.body.Image.trim();
  const Recipe_Desc = req.body.Description.trim();
  const result = orm2.insertNewRecipe(Title, Recipe_Desc, Recipe_link, Image);
  res.redirect('/newRecipe');
});

module.exports = router;
