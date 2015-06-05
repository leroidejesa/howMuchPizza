// Create a website for a pizza company where a user can order a pizza and see the final cost.
//
// Allow the user to choose quantity, toppings and size.
// Create a method for the cost of a pizza depending on the selections chosen. Use your own formula for this.
//

describe('Pizza', function() {
  it("creates a new pizza in terms of size and toppings", function() {
    var testPizza = new Pizza(1, "large", ["sausage", "pineapple"]);
    expect(testPizza.quantity).to.eql(1);
    expect(testPizza.pizzaSize).to.eql("large");
    expect(testPizza.toppings).to.eql(["sausage", "pineapple"]);
  });

  it("returns the cost of a single pizza, taking into account size and toppings", function() {
    var testPizza = new Pizza(2, "large", ["sausage", "pineapple"]);
    expect(testPizza.cost()).to.equal(24);
  });
});









// describe('Account', function() {
//   it("", function() {
//
//     expect().to.equal();
//   });

// });
