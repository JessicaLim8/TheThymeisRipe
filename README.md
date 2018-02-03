# TheThymeisRipe

function displayOutput(htmlFile) {

  var recievednofood[] = new array string;
  var nofood[] = new array string;
  var donteat[] = new array string;
  var mealchoices[] = new array string;
  var donthave;
  var have;
  var endURL;

  var possibleConcerns = ['pescetarian', 'lactovegetarian', 'ovovegetarian', 'vegan', 'paleo', 'primal', 'vegetarian'];
  var dietaryRestrictions = null;
  for (var i = 0; i < 7; i++) {
    if (nofood[i] == false) {
      continue;
    }
    else {
      dietaryRestrictions = dietaryRestrictions + "%2C" + possibleConcerns[i];
    }
  }
  if (dietaryRestrictions != null) {
    endURL = "&diet=" + excludeThese;
  }

  var excludeThese = donthave.replaceAll(", ", "%2C");
  if (excludeThese == null) {
    excludeThese = "false"
  }
  if (excludeThese != null) {
    endURL = endURL + "&excludeIngredients=" + excludeThese;
  }

  var useThese = have.replace(", ", "%2C");
  if (useThese == null) {
    useThese = "false"
  }
  if (useThese != null) {
    endURL = endURL + "&includeIngredients=" + useThese;
  }

  endURL = endURL + "&instructionsRequired=true";

  var allergens = ['dairy', 'egg', 'gluten', 'peanut', 'sesame', 'seafood', 'shellfish', 'soy', 'sulfite', 'treenut', 'wheat'];
  var intolerances = null;
  for (var i = 0; i < 11; i++) {
    if (intolorances[i] == false) {
      continue;
    }
    else {
      intolorances = intolorances + "%2C" + allergens[i];
    }
  }
  if (excludeThese != null) {
    endURL = endURL + "&intolerances=" + intolorances;
  }

  endURL = endURL + "&limitLicense=true&number=20&ranking=1";

  var types = null;
  var courses = ['main course', 'side dish', 'dessert', 'appetizer', 'salad', 'bread', 'breakfast', 'soup', 'beverage', 'sauce', 'drink'];
  for (var i = 0; i < 11; i++) {
    if (mealcourses[i] == false) {
      continue;
    }
    else {
      types= types + "%2C" + courses[i];
    }
  }
  if (types != null) {
    endURL = endURL + "&type=" + types;
  } else

    unirest.get("https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/searchComplex?addRecipeInformation=true" + endURL)
    .header("X-Mashape-Key", "sExkeLj1nvmshqHUbsHTOOYqORUcp19f2zDjsnbyeXK02jxgKw")
    .header("Accept", "application/json")
    .end(function (result) {
    console.log(result.status, result.headers, result.body);
  }
