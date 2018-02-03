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

    console.log(endURL);

    var excludeThese = donthave.replace(", ", "%2C");
    if (excludeThese == "") {
      excludeThese = "false"
    }
    if (excludeThese != "") {
      endURL = endURL + "&excludeIngredients=" + excludeThese;
    }

    console.log(endURL);

    var useThese = have.replace(", ", "%2C");
    if (useThese == "") {
      useThese = "false"
    }
    if (useThese != "") {
      endURL = endURL + "&includeIngredients=" + useThese;
    }

    console.log(endURL);

    endURL = endURL + "&instructionsRequired=true";

    console.log(endURL);

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

    console.log(endURL);

    endURL = endURL + "&limitLicense=true&number=20&ranking=1";

    console.log(endURL);

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

    console.log(endURL);

    endURL = "https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/searchComplex?addRecipeInformation=true" + endURL;

    unirest.get("https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/searchComplex?addRecipeInformation=false&includeIngredients=onions%2C+lettuce%2C+tomato&instructionsRequired=false&intolerances=peanut%2C+shellfish&limitLicense=false&maxCalories=1500&maxCarbs=100&maxFat=100&maxProtein=100&minCalories=150&minCarbs=5&minFat=5&minProtein=5&number=10&offset=0&query=burger&ranking=1&type=main+course")
    .header("X-Mashape-Key", "sExkeLj1nvmshqHUbsHTOOYqORUcp19f2zDjsnbyeXK02jxgKw")
    .header("Accept", "application/json")
    .end(function (result) {
      console.log(result.status, result.headers, result.body);
    });

    return(endURL);

  /*  <script>$.ajax({
      unirest.get("https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/searchComplex?addRecipeInformation=true" + endURL);
      .header("X-Mashape-Key", "sExkeLj1nvmshqHUbsHTOOYqORUcp19f2zDjsnbyeXK02jxgKw");
      .header("Accept", "application/json");
      .end(function (result) {
      console.log(result.status, result.headers, result.body); */

  }
