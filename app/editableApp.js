angular.module('editApp', [])

.directive('makeEditable', function() {
  return {
    restrict: 'A',
    transclude: true,
    scope: true,
    templateUrl: 'editableTemplate.html'
  }
})