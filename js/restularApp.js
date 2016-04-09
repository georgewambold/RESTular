var restularApp = angular.module('Restular', ['ngInflection']);

restularApp.controller('TableCtrl', function($scope, $filter){

  $scope.resource = "ARTicles"
  $scope.nestedResource = "TAgs"

  // Single resource
  $scope.singularDowncaseResource = $filter('lowercase')($scope.resource)
  $scope.singularDowncaseResource = $filter('transform')($scope.singularDowncaseResource, ['singularize'])

  $scope.singularPropercaseResource = $filter('transform')($scope.resource, ['titleize', 'singularize'])
  
  $scope.pluralDowncaseResource = $filter('lowercase')($scope.resource)
  $scope.pluralDowncaseResource = $filter('transform')($scope.pluralDowncaseResource, ['pluralize'])

  // // Nested resource 
  $scope.singularDowncaseNestedResource = $filter('lowercase')($scope.nestedResource)
  $scope.singularDowncaseNestedResource = $filter('transform')($scope.singularDowncaseNestedResource, ['singularize'])

  $scope.singularPropercaseNestedResource = $filter('transform')($scope.nestedResource, ['titleize', 'singularize'])
  
  $scope.pluralDowncaseNestedResource = $filter('lowercase')($scope.nestedResource)
  $scope.pluralDowncaseNestedResource = $filter('transform')($scope.pluralDowncaseNestedResource, ['pluralize'])

});
