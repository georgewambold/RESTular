var restularApp = angular.module('Restular', ['ngInflection', 'restularFilters']);

restularApp.controller('TableCtrl', function($scope, $filter){

  $scope.resource = "articles"
  $scope.nestedResource = "tags"

  $scope.init = function () {
    $scope.updateResourceVars()
  }

  $scope.updateResourceVars = function () {

    // Single resource
    $scope.singularDowncaseResource = $filter('lowercase')($scope.resource)
    $scope.singularDowncaseResource = $filter('transform')($scope.singularDowncaseResource, ['singularize'])

    $scope.singularPropercaseResource = $filter('capitalize')($scope.resource)
    $scope.singularPropercaseResource = $filter('transform')($scope.singularPropercaseResource, ['singularize'])
    
    $scope.pluralDowncaseResource = $filter('lowercase')($scope.resource)

    // Nested resource
    $scope.singularDowncaseNestedResource = $filter('lowercase')($scope.nestedResource)
    $scope.singularDowncaseNestedResource = $filter('transform')($scope.singularDowncaseNestedResource, ['singularize'])

    $scope.singularPropercaseNestedResource = $filter('capitalize')($scope.nestedResource)
    $scope.singularPropercaseNestedResource = $filter('transform')($scope.singularPropercaseNestedResource, ['singularize'])
    
    $scope.pluralDowncaseNestedResource = $filter('lowercase')($scope.nestedResource)
  }

});
