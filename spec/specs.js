// Create a website for a pizza company where a user can order a pizza and see the final cost.
//
// Allow the user to choose quantity, toppings and size.
// Create a method for the cost of a pizza depending on the selections chosen. Use your own formula for this.
//

describe('Pizza', function() {
  it("creates a new pizza in terms of size and toppings", function() {
    var testPizza = new Pizza(1, "large", "mushrooms");
    expect(testPizza.quantity).to.eql(1);
    expect(testPizza.pizzaSize).to.eql("large");
    expect(testPizza.toppings).to.eql(["mushrooms"]);
  });

  it("returns the cost of a single pizza, taking into account size and toppings", function() {
    var testPizza = new Pizza(2, "large", "mushrooms");
    expect(testPizza.cost()).to.equal(22);
  });
});

describe('Order', function() {
  it("should account for the order name and the total cost of pizzas ordered", function() {
    var testPizza = new Pizza(2, "large", "sausage");
    var testPizza2 = new Pizza(1, "medium", "pepperoni");
    var testOrder = new Order("George");
    testOrder.pizzas.push(testPizza);
    testOrder.pizzas.push(testPizza2);
    expect(testOrder.totalCost()).to.equal(31);
  })
})
