var recipe = {
    title: "Bread",
    servings: 2,
    ingredients: ["Flour", "Water"]
};

fill(26, 26, 26);
textSize(20);
text(recipe.title, 10, 23);
text("Serves: " + recipe.servings, 10, 55);
text("Ingredients: " + recipe.ingredients, 10, 85);

var recipeTitle = "Coffee";
var recipeServings = 2;
var recipeIngredients = ["Coffe", "Milk"];
