const db = require( './connection' )('fi05jgc2tuzs15tz','f9c0u9nyoxegodmd')

var orm = {

  selectNewRecipe: function(callback) {
    // Run MySQL Query
    db.query('SELECT * FROM newrecipe', function (err, result) {
      if (err) throw err;
      callback(result);
    });
  },
    // selectAll()
    selectAll: function(callback) {
      // Run MySQL Query
      db.query('SELECT * FROM dreamkitchen5', function (err, result) {
        if (err) throw err;
        callback(result);
      });
    },

    selectType: function(callback) {
      // Run MySQL Query
      db.query('SELECT DISTINCT Menu_Type FROM  dreamkitchen5', function (err, result) {
        if (err) throw err;
        callback(result);
      });
    },
    selectRsturantName: function(callback) {
      // Run MySQL Query
      db.query('SELECT DISTINCT Restaurant_Name FROM  dreamkitchen5', function (err, result) {
        if (err) throw err;
        callback(result);
      });
    },
    selectPrice: function(callback) {
      // Run MySQL Query
      db.query('SELECT DISTINCT Price_Profile FROM  dreamkitchen5', function (err, result) {
        if (err) throw err;
        callback(result);
      });
    },

    selectItemByType: function(type, callback){
      const updateQuery = `SELECT * FROM dreamkitchen5 where type = ${type}`
      // Run MySQL Query
      db.query(updateQuery , function (err, result) {
          if (err) throw err;
          callback(result);
        });
    }
    
  };
  
  // Export the ORM object in module.exports.
  module.exports = orm
  //module.exports = insertNewRecipe