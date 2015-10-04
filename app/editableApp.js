angular.module('editApp', [])

.directive('makeEditable', function() {
  return {
    restrict: 'A',
    transclude: true,
    templateUrl: 'editableTemplate.html'
  }
})