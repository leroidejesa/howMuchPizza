// Create a website for a pizza company where a user can order a pizza and see the final cost.
//
// Allow the user to choose quantity, toppings and size.
// Create a method for the cost of a pizza depending on the selections chosen. Use your own formula for this.


// raw JS

var Pizza = function(quantity, size, toppings) {
  this.quantity = quantity;
  this.pizzaSize = size;
  this.toppings = toppings.split(" ");
};

Pizza.prototype.cost = function() {
  var pizzaCost = 0;
  var sizePrices = { "small": 5, "medium": 8, "large": 10 };
  this.toppings.forEach(function(topping) {
    pizzaCost += 1
  });
  pizzaCost += sizePrices[this.pizzaSize]
  pizzaCost *= this.quantity
  return pizzaCost;
}

Pizza.prototype.capitalToppings = function() {
  var words = this.toppings
  var array = []
  for (var i=0; i<words.length; ++i) {
    array.push(words[i].charAt(0).toUpperCase() + words[i].toLowerCase().slice(1))
  }
  return array.join(' ')
}

Pizza.prototype.capitalPizzaSize = function() {
  var words = this.pizzaSize.split(' ')
  var array = []
  for (var i=0; i<words.length; ++i) {
    array.push(words[i].charAt(0).toUpperCase() + words[i].toLowerCase().slice(1))
  }
  return array.join(' ')
}



var Order = function(orderName) {
  this.orderName = orderName;
  this.pizzas = [];
};

Order.prototype.totalCost = function() {
  var orderCost = 0;
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
    var newOrder = new Order(inputtedOrderName);

    $(".new-pizza").each(function() {
      var inputtedSize = $(this).find("input.new-size").val();
      var inputtedToppings = $(this).find("input.new-toppings").val();
      var inputtedQuantity = $(this).find("input.new-quantity").val();

      var newPizza = new Pizza(inputtedQuantity, inputtedSize, inputtedToppings);
      newOrder.pizzas.push(newPizza);
    });

    $("ul#orders").append("<li><span class='order'>" + newOrder.orderName + "</span></li>");

    $(".order").last().click(function() {
      $("#show-order").show();

      $("#show-order h2").text(newOrder.orderName);

      $("ul#pizzas").text("");
      var pizzaCounter = 0
      newOrder.pizzas.forEach(function(pizza) {
        $("ul#pizzas").append("<li>Size: " + pizza.pizzaSize + ", Toppings: " + pizza.toppings + " Quantity: " + pizza.quantity + "</li>");
        pizzaCounter += parseInt(pizza.quantity);
      });

      $("ul#pizzas").append("<li>Total Pizzas: " + pizzaCounter + "</li>");
      $("ul#pizzas").append("<li>Total Cost: " + newOrder.totalCost() + "</li>");
    });
  });
});
