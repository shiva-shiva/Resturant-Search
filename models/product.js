var orm = require ('../config/orm.js');

var foods = {
    selectAll: function(callback){
      orm.selectAll(function(res){
        callback(res);
      });
    },

    selectItemByType: function(callback){
      orm.selectItemByType(function(res){
        callback(res);
      });
    },
    selectType: function(callback){
      orm.selectType(function(res){
        callback(res);
      });
    },
    selectPrice: function(callback){
      orm.selectPrice(function(res){
        callback(res);
      });
    },
    selectRsturantName: function(callback){
      orm.selectRsturantName(function(res){
        callback(res);
      });
    },
    selectNewRecipe: function(callback){
      orm.selectNewRecipe(function(res){
        callback(res);
      });
    },
  
  
  };
 
  
  
  // Export at the end of the burger.js file.
  module.exports = foods;