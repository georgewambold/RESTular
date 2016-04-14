restularApp.controller('TableCtrl', function($scope, $filter, $compile){

  $scope.routes = singularRoutes
  $scope.resource = "articles"
  $scope.nestedResource = ""

  $scope.$watchGroup(['resource', 'nestedResource'], function (newValues){

    downcaseNewValue = $filter('lowercase')(newValues[0])
    upcaseNewValue = $filter('capitalize')(newValues[0])

    // Singular resource variables
    $scope.singularDowncaseResource = $filter('transform')(downcaseNewValue, ['singularize'])
    $scope.singularPropercaseResource = $filter('transform')(upcaseNewValue, ['singularize'])
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