import angular from 'angular';

(function() {
  angular.module('app', ['prodListService'])
    .controller('ProductListController', function (prodListService) {

      prodListService.getProductList()
        .then(response => {
          this.allProducts = response.data.data
        });
    });

  angular.module('prodListService', [])
    .service('prodListService', function($sce, $http) {
      const baseUrl = 'http://localhost:4000';
      const url = `${baseUrl}/db`;
      const safeUrl = $sce.trustAsResourceUrl(url);

      this.getProductList = () => {
        return $http.jsonp(safeUrl, {jsonpCallbackParam: 'callback'});
      }
    });

})()
