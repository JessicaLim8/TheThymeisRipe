function displayOutput(allerg, dietres, mealchoices, donthave, have) {

    var endURL = "";

    var possibleConcerns = ['pescetarian', 'lactovegetarian', 'ovovegetarian', 'vegan', 'paleo', 'primal', 'vegetarian'];
    var dietaryRestrictions = "";
    for (var i = 0; i < 7; i++) {
      if (dietres[i] == false) {
        continue;
      }  else {
        dietaryRestrictions = dietaryRestrictions + "%2C" + possibleConcerns[i].toString();
      }
    }
    dietaryRestrictions = dietaryRestrictions.replace("%2C", "");
    if (dietaryRestrictions != "null") {
      endURL = "&diet=" + dietaryRestrictions;
    }

    var excludeThese = donthave.replace(", ", "%2C");
    if (excludeThese == "") {
      excludeThese = "false"
    }
    if (excludeThese != "") {
      endURL = endURL + "&excludeIngredients=" + excludeThese;
    }

    var useThese = have.replace(", ", "%2C");
    if (useThese == "") {
      useThese = "false"
    }
    if (useThese != "") {
      endURL = endURL + "&includeIngredients=" + useThese;
    }

    endURL = endURL + "&instructionsRequired=true";

    var allergens = ['dairy', 'egg', 'gluten', 'peanut', 'sesame', 'seafood', 'shellfish', 'soy', 'sulfite', 'treenut', 'wheat'];
    var intolorances = "";
    for (var i = 0; i < 11; i++) {
      if (allerg[i] == false) {
        continue;
      }
      else {
        intolorances = intolorances + "%2C" + allergens[i];
      }
    }
    intolorances = intolorances.replace("%2C", "");
    if (intolorances != "") {
      endURL = endURL + "&intolerances=" + intolorances;
    }

    endURL = endURL + "&limitLicense=true&number=1&ranking=1";

    var types = "";
    var courses = ['main course', 'side dish', 'dessert', 'appetizer', 'salad', 'bread', 'breakfast', 'soup', 'beverage', 'sauce', 'drink'];
    for (var i = 0; i < 11; i++) {
      if (mealchoices[i] == false) {
        continue;
      }
      else {
        types= types + "%2C" + courses[i];
      }
    }
    types = types.replace("%2C", "");
    if (types != "") {
      endURL = endURL + "&type=" + types;
    } else

    endURL = "https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/searchComplex?addRecipeInformation=true" + endURL;

    console.log(endURL);

    $.ajax({
         url: endURL,
         //"https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/searchComplex?addRecipeInformation=false&cuisine=american&excludeIngredients=coconut%2C+mango&fillIngredients=false&includeIngredients=onions%2C+lettuce%2C+tomato&instructionsRequired=false&intolerances=peanut%2C+shellfish&limitLicense=false&maxCalories=1500&maxCarbs=100&maxFat=100&maxProtein=100&minCalories=150&minCarbs=5&minFat=5&minProtein=5&number=10&offset=0&query=burger&ranking=1&type=main+course",
         type: "GET",
         beforeSend: function(xhr){xhr.setRequestHeader('X-Mashape-Key', '5InmjaVBTlmshELCeDfhJIEkGSvgp1f4qI6jsnEHo4cgCNfcZT');},
         success: function(result) {
           console.log(result);
             var myJSON = JSON.stringify(result);
             var recipe = [3];
             recipe[0] = JSON.title;
             recipe[1] = JSON.image;
             recipe[2] = JSON.spoonacularSourceUrl;
             console.log(recipe[0]);
             console.log(recipe[1]);
             console.log(recipe[2]);
             return(recipe);
          }
      });
    return(endURL);

  }
