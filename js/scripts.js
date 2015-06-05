// Create a website for a pizza company where a user can order a pizza and see the final cost.
//
// Allow the user to choose quantity, toppings and size.
// Create a method for the cost of a pizza depending on the selections chosen. Use your own formula for this.


// raw JS
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




// jQuery
$(document).ready(function() {

  $("#add-pizza").click(function() {
    $("#new-pizzas").append('<div class="new-pizza">' +
                                 '<div class="form-group">' +
                                   '<label for="new-size">Size</label>' +
                                   '<input type="text" class="form-control new-size">' +
                                 '</div>' +
                                 '<div class="form-group">' +
                                   '<label for="new-toppings">Toppings</label>' +
                                   '<input type="text" class="form-control new-toppings">' +
                                 '</div>' +
                                 '<div class="form-group">' +
                                   '<label for="new-quantity">Quantity</label>' +
                                   '<input type="text" class="form-control new-quantity">' +
                                 '</div>' +
                               '</div>');
  });

  $("form#new-order").submit(function(event) {
    event.preventDefault();

    var inputtedOrderName = $("input#new-order-name").val();
    var newOrder = new Order(inputtedOrderName, []);

    $(".new-pizza").each(function)
  })

});
