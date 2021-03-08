const results = []

async function getResults(event){
    event.preventDefault()
    let foodSearch = document.getElementById('search').value 
    if (priceCheck.value === true){
        let priceLimit = document.getElementById('priceRange').value
    } 
    if (dishCheck.value === true){
        let dishType = document.getElementById('dishStyle').value
    } 
    resultsData(foodSearch, priceLimit, dishType)
}

async function resultsData(foodSearch, priceLimit, dishType){
    results.push( db.query(`SELECT food, description,  FROM database WHERE food = ${foodSearch}, price <=${priceLimit}, dish = ${dishType} `) )

}

async function loadResults(results){
    for (let i = 0; i < results.length; i++){
        let foodName = results[i].name
        let recipe = results[i].recipe
        let menu = results[i].menu
        let price = results[i].price
        let image = results[i].image
        document.getElementById('resultsHTML').innerHTML += `<div class="card" style="width: 18rem; margin-right: 15px; position: relative;">
        <img src="${results[i].image}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${results[i].name}</h5>
          <p class="card-text">Description.</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Rating: </li>
          <li class="list-group-item">Price: ${results[i].price}</li>
          <li class="list-group-item">Cuisine ${results[i].price}</li>
        </ul>
        <div class="card-body">
          <a href="${results[i].recipe}" class="btn btn-primary">Add to Order</a>
        </div>
      </div>
        `
    }
}