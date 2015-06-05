// Create a website for a pizza company where a user can order a pizza and see the final cost.
//
// Allow the user to choose quantity, toppings and size.
// Create a method for the cost of a pizza depending on the selections chosen. Use your own formula for this.



var Pizza = function(size, toppings) {
  this.size = size
  this.toppings = toppings
};

Pizza.prototype.cost = function() {
  var totalCost = 0
  var sizePrices = { "small": 5, "medium": 8, "large": 10 };
  totalCost += sizePrices[this.size]
  this.toppings.forEach(function(topping) {
    totalCost += 1
  })
  return totalCost;
}




//
// var Order = function(pizzas, quantity) {
//   this.pizza = pizzas
//   this.quantity = quantity
// }
//
// var order1 = new Order(pizza1, 2);
