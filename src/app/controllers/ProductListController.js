const ProductListController = function(title, price, description, quantity) {
  this.title = title;
  this.price = price;
  this.description = description;
  this.quantity = quantity;

  this.blah = () => {
    return 'blah'
  }
}

module.exports = {
  ProductListController
}

