restularIndex.controller('TableCtrl', function($scope, $filter, $compile){

  // route template
  $scope.routes = singularRoutes

  //resources
  $scope.resource = "articles"
  $scope.nestedResource = ""

  // updates variables and template on resource or nestedResource update
  $scope.$watchGroup(['resource', 'nestedResource'], function (newValues){
    // newValues[0] == resource
    // newValues[1] == nestedResource

    // singular resource variables
    downcaseNewValue = $filter('lowercase')(newValues[0])
    upcaseNewValue = $filter('capitalize')(newValues[0])
    $scope.singularDowncaseResource = $filter('transform')(downcaseNewValue, ['singularize'])
    $scope.singularPropercaseResource = $filter('transform')(upcaseNewValue, ['singularize'])
    $scope.pluralDowncaseResource = downcaseNewValue

    if (newValues[1]) {
      // show nested route templates IF nestedResource
      $scope.routes = nestedRoutes

      // nested resource variables
      downcaseNestedResource = $filter('lowercase')(newValues[1])
      $scope.singularDowncaseNestedResource = $filter('transform')(downcaseNestedResource, ['singularize'])
      $scope.pluralDowncaseNestedResource = downcaseNestedResource
    } else {
      // show singularRoutes IF !nestedResource
      $scope.routes = singularRoutes
    }
  });
});