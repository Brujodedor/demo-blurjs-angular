angular.module('MyTutorialApp', [])

.directive('blurred', function () {
  var directive = { restrict: 'A' };
  directive.compile = function compile (tElement) {
    // taken from blur.js homepage
    tElement.blurjs({
      source: '#bgToBlurContainer',
      radius: 10,
      overlay: 'rgba(0,0,0,0.5)'
    });
  };
  return directive;
});