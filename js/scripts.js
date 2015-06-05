// Create a website for a pizza company where a user can order a pizza and see the final cost.
//
// Allow the user to choose quantity, toppings and size.
// Create a method for the cost of a pizza depending on the selections chosen. Use your own formula for this.



var Pizza = function(size, toppings) {
  this.size = size
  this.toppings = toppings
};

var Order = function(pizza, quantity) {
  this.pizza = pizza
  this.quantity = quantity
}

var order1 = new Order(pizza1, 2);
