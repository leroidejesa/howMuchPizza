// raw JS

// in order to capitalize inputted names, pizza sizes, and toppings
String.prototype.titleize = function() {
  var words = this.split(' ')
  var array = []
  for (var i=0; i<words.length; ++i) {
    array.push(words[i].charAt(0).toUpperCase() + words[i].toLowerCase().slice(1))
  }
  return array.join(' ')
}

var Pizza = function(quantity, size, toppings) {
  this.quantity = quantity;
  this.pizzaSize = size.titleize();
  this.toppings = toppings.titleize();
};

Pizza.prototype.cost = function() {
  var pizzaCost = 0;
  var sizePrices = { "Small": 5, "Medium": 8, "Large": 10 };
  var toppingsArray = this.toppings;
  toppingsArray = toppingsArray.split(' ');
  toppingsArray.forEach(function(topping) {
    pizzaCost += 1;
  });
  pizzaCost += sizePrices[this.pizzaSize];
  pizzaCost *= this.quantity;
  return pizzaCost;
};

var Order = function(orderName) {
  this.orderName = orderName.titleize();
  this.pizzas = [];
};

Order.prototype.totalCost = function() {
  var orderCost = 0;
  this.pizzas.forEach(function(pizza) {
    orderCost += pizza.cost();
  });
  return orderCost;
};

function resetFields(){
  $("input#new-order").val("");
  $("input.new-size").val("");
  $("input.new-toppings").val("");
  $("input.new-quantity").val("");
  $("div.new-pizza").not(':first').remove();
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

    $("form#new-order").fadeOut();
    
    $(".order-column").fadeIn();

    $("ul#orders").append("<li><span class='order'>View Cart</span></li>");

    $(".order").last().click(function() {
      $("#show-order").fadeIn();

      $("#show-order h4").text("Details:");

      $("ul#pizzas").text("");
      var pizzaCounter = 0;
      newOrder.pizzas.forEach(function(pizza) {
        $("ul#pizzas").append("<li>Size: " + pizza.pizzaSize + "<br><ol>Toppings:" + "<li>" + pizza.toppings + "</li></ol>" + "<br>Quantity: " + pizza.quantity + "</li>");
        pizzaCounter += parseInt(pizza.quantity);
      });

      $("ul#pizzas").append("<li>Total Pizzas: " + pizzaCounter + "</li>");
      $("ul#pizzas").append("<li>Total Cost: $" + newOrder.totalCost() + "</li>");
    });

    resetFields();
  });
});
