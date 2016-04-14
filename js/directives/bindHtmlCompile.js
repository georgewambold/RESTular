restularApp.directive('bindHtmlCompile', ['$compile', function ($compile) {
  return {
    restrict: 'A',
    // 'restrict: A'
    // this restricts the directive to match only attributes named bind-html-compile
    // eg. <div bind-html-compile='someValue'></div> ('A' for attribute!)
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