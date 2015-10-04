angular.module('editApp', [])

.directive('makeEditable', function() {
  return {
    restrict: 'A',
    transclude: true,
    template: '<div contenteditable="true">' + 
              '<p ng-transclude>' + 
              '</p>' + 
              '<div>'
  }
})