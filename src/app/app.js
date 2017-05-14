import angular from 'angular';

angular.module('app', [])
  .controller('ProductListController', ProductListController);

function ProductListController() {
  this.name = 'Hello';
};

function ProductListService() {
  
};
