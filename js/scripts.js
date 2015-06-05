// Create a website for a pizza company where a user can order a pizza and see the final cost.
//
// Allow the user to choose quantity, toppings and size.
// Create a method for the cost of a pizza depending on the selections chosen. Use your own formula for this.



var Pizza = function(quantity, size, toppings) {
  this.quantity = quantity
  this.pizzaSize = size
  this.toppings = toppings
};

Pizza.prototype.cost = function() {
  var pizzaCost = 0
  var sizePrices = { "small": 5, "medium": 8, "large": 10 };
  this.toppings.forEach(function(topping) {
    pizzaCost += 1
  });
  pizzaCost += sizePrices[this.pizzaSize]
  pizzaCost *= this.quantity
  return pizzaCost;
}


var Order = function(name, pizzas) {
  this.orderName = name
  this.pizzas = pizzas
}

Order.prototype.totalCost = function() {
  var orderCost = 0
  this.pizzas.forEach(function(pizza) {
    orderCost += pizza.cost();
  });
  return orderCost;
}




// 
// $(document).ready(function() {
//
// })
//
// })
