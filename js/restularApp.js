var restularApp = angular.module('Restular', ['ngInflection']);

restularApp.controller('TableCtrl', function($scope){

  $scope.resource = "articles"
  $scope.nestedResource = "tags"

  // // Single resource 
  // $scope.singularDowncaseResource = pluralize($scope.resource.toLowerCase(), 1)
  // $scope.singularPropercaseResource = pluralize(propercase($scope.resource), 1)
  // $scope.pluralDowncaseResource = $scope.resource.toLowerCase()

  // // Nested resource 
  // $scope.singularDowncaseNestedResource = pluralize($scope.nestedResource.toLowerCase(), 1)
  // $scope.singularPropercaseNestedResource = pluralize(propercase($scope.nestedResource), 1)
  // $scope.pluralDowncaseNestedResource = $scope.nestedResource.toLowerCase()


  function propercase(string) {
    var lowerCaseString = string.toLowerCase();
    return lowerCaseString.charAt(0).toUpperCase() + lowerCaseString.slice(1);
  }
});
