const db = require( './connection' )('fi05jgc2tuzs15tz','f9c0u9nyoxegodmd')

function insertNewRecipe(Title, Recipe_Desc, Recipe_link, Image){
    const updateQuery = `INSERT INTO newrecipe (Dish_Name, Dish_Description, Make_it_at_Home, Img_Link) VALUES ('${Title}', '${Recipe_Desc}', '${Recipe_link}', '${Image}');`
    console.log("updateQuery" + updateQuery)
   return db.query(updateQuery);
  }

async function searchResults(search){
    const searchQuery = db.query(`SELECT * FROM dreamkitchen5 WHERE Dish_Name LIKE '%${search}%';`)
      return searchQuery
}
async function searchResuturant(search){
  const searchQuery = db.query(`SELECT * FROM dreamkitchen5 WHERE Restaurant_Name ='${search}';`)
    console.log(search)
    return searchQuery
}
async function searchCuisine(search){
  const searchQuery = db.query(`SELECT * FROM dreamkitchen5 WHERE Menu_Type = '${search}';`)
    return searchQuery
}

  module.exports = {insertNewRecipe, searchResults, searchResuturant, searchCuisine}