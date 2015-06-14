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
    $("#new-pizzas").append('<hr>' + '<div class="new-pizza">' +
                               '<label for="dropdown-size">Size</label>' +
                               '<select class="form-control" id="dropdown-size">' +
                                 '<option value="one">Small</option>' +
                                 '<option value="two">Medium</option>' +
                                 '<option value="three">Large</option>' +
                               '</select><br>' +
                               '<div class="form-group">' +
                                 '<label for="new-toppings">Toppings</label>' +
                                 '<input type="text" class="form-control new-toppings">' +
                               '</div>' +
                               '<label for="dropdown-quantity">Quantity</label>' +
                               '<select class="form-control" id="dropdown-quantity">' +
                               '<option value="one">1</option>' +
                                 '<option value="two">2</option>' +
                                 '<option value="three">3</option>' +
                                 '<option value="four">4</option>' +
                                 '<option value="five">5</option>' +
                                 '<option value="six">6</option>' +
                                 '<option value="seven">7</option>' +
                               '</select>' +
                            '</div>');
  });

  $("form#new-order").submit(function(event) {
    event.preventDefault();

    var inputtedOrderName = $("input#new-order-name").val();
    var newOrder = new Order(inputtedOrderName);

    $(".new-pizza").each(function() {
      var inputtedSize = $('#dropdown-size option:selected').text();
      var inputtedToppings = $(this).find("input.new-toppings").val();
      var inputtedQuantity = $('#dropdown-quantity option:selected').text();

      var newPizza = new Pizza(inputtedQuantity, inputtedSize, inputtedToppings);

      newOrder.pizzas.push(newPizza);
    });

    $("div").animate({right: '160px'});
//under construction

    $(".order-column").fadeIn();

    $("ul#orders").append("<li><span class='order'>View Cart</span></li>");

    $(".order").last().click(function() {
      $("#show-order").fadeIn();

      $("#show-order h4").text("Details:");

      $("ul#pizzas").text("");
      var pizzaCounter = 0;
      newOrder.pizzas.forEach(function(pizza) {
        $("ul#pizzas").append("<li>Size: " + pizza.pizzaSize + "<br>Toppings:" + "<li>" + pizza.toppings + "</li>" + "<br>Quantity: " + pizza.quantity + "</li>");
        pizzaCounter += parseInt(pizza.quantity);
      });

      $("ul#pizzas").append("<li>Total Pizzas: " + pizzaCounter + "</li>");
      $("ul#pizzas").append("<li>Total Cost: $" + newOrder.totalCost() + "</li>");
    });

    resetFields();
  });
});
