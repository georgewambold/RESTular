var restularApp = angular.module('Restular', ['ngInflection', 'restularFilters', 'ngSanitize']);

restularApp.controller('TableCtrl', function($scope, $filter, $sce, $compile, $interpolate, $templateCache){

  $scope.routes = singularRoutes

  $scope.resource = "articles"
  $scope.nestedResource = ""

  $scope.$watchGroup(['resource', 'nestedResource'], function (newValues){
    downcaseNewValue = $filter('lowercase')(newValues[0])

    // Singular resource variables
    $scope.singularDowncaseResource = $filter('transform')(downcaseNewValue, ['singularize'])
    $scope.singularPropercaseResource = $filter('transform')(downcaseNewValue, ['singularize'])
    $scope.pluralDowncaseResource = downcaseNewValue

    // Nested resource 
    if (newValues[1]) {
      $scope.routes = nestedRoutes
      downcaseNestedResource = $filter('lowercase')(newValues[1])

      $scope.singularDowncaseNestedResource = $filter('transform')(downcaseNestedResource, ['singularize'])
      $scope.pluralDowncaseNestedResource = downcaseNestedResource
    } else {
      $scope.routes = singularRoutes
    }
  });

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