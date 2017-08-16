const ProductListService = function ($sce, $http) {
      const baseUrl = 'http://localhost:4000';
      const url = `${baseUrl}/db`;
      const safeUrl = $sce.trustAsResourceUrl(url);

      this.getProductList = () => {
        return $http.jsonp(safeUrl, {jsonpCallbackParam: 'callback'});
      }
}


module.exports = {
  ProductListService
}
