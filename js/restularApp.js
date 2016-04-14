var restularApp = angular.module('Restular', ['ngInflection', 'restularFilters', 'ngSanitize']);

restularApp.controller('TableCtrl', function($scope, $filter, $sce, $compile, $interpolate, $templateCache){



  $scope.checkForNestedRoutes = function () {
    if ($scope.nestedResource) {
      return nestedRoutes
    } else {
      return singularRoutes
    }
  }

  $scope.routes = $scope.checkForNestedRoutes()

  $scope.resource = "articles"
  $scope.nestedResource = ""

  $scope.init = function () {
    $scope.updateResourceVars()
  }

  // $scope.updateResourceVars = function () {

  //   // Single resource
  //   $scope.singularDowncaseResource = $filter('lowercase')($scope.resource)
  //   $scope.singularDowncaseResource = $filter('transform')($scope.singularDowncaseResource, ['singularize'])

  //   $scope.singularPropercaseResource = $filter('capitalize')($scope.resource)
  //   $scope.singularPropercaseResource = $filter('transform')($scope.singularPropercaseResource, ['singularize'])
    
  //   $scope.pluralDowncaseResource = $filter('lowercase')($scope.resource)

  //   // Nested resource
  //   if ($scope.nestedResource) {
  //     $scope.singularDowncaseNestedResource = $filter('lowercase')($scope.nestedResource)
  //     $scope.singularDowncaseNestedResource = $filter('transform')($scope.singularDowncaseNestedResource, ['singularize'])
      
  //     $scope.pluralDowncaseNestedResource = $filter('lowercase')($scope.nestedResource)
  //   }
  // }
  

});

restularApp.directive('bindHtmlCompile', ['$compile', function ($compile) {
  return {
    restrict: 'A',
    link: function (scope, element, attrs) {
        scope.$watch(function () {
            return scope.$eval(attrs.bindHtmlCompile);
        }, function (value) {
            element.html(value);
            $compile(element.contents())(scope);
        });
    }
  };
}]);