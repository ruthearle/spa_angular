const ProductListController = function(service) {
  service.getProductList()
    .then(response => {
      this.allProducts = response.data.data
    });
}

module.exports = {
  ProductListController
}

