angular
  .module('username')
  .controller("NewController", function ($scope, Username, supersonic) {
    $scope.username = {};

    $scope.submitForm = function () {
      $scope.showSpinner = true;
      newusername = new Username($scope.username);
      newusername.save().then( function () {
        supersonic.ui.modal.hide();
      });
    };

    $scope.cancel = function () {
      supersonic.ui.modal.hide();
    }

  });