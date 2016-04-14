var restularApp = angular.module('Restular', ['ngInflection', 'restularFilters', 'ngSanitize']);

restularApp.controller('TableCtrl', function($scope, $filter, $sce, $compile, $interpolate, $templateCache){

  $scope.routes = singularRoutes

  $scope.resource = "articles"
  $scope.nestedResource = ""

  $scope.$watch('resource', function (newValue){
    downcaseNewValue = $filter('lowercase')(newValue)

    // Singular resource variables
    $scope.singularDowncaseResource = $filter('transform')(downcaseNewValue, ['singularize'])
    $scope.singularPropercaseResource = $filter('transform')(downcaseNewValue, ['singularize'])
    $scope.pluralDowncaseResource = downcaseNewValue

    // Nested resource 
    if ($scope.nestedResource) {
      $scope.singularDowncaseNestedResource = $filter('lowercase')($scope.nestedResource)
      $scope.singularDowncaseNestedResource = $filter('transform')($scope.singularDowncaseNestedResource, ['singularize'])

      $scope.pluralDowncaseNestedResource = $filter('lowercase')($scope.nestedResource)
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