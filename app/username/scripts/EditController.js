angular
  .module('username')
  .controller("EditController", function ($scope, Username, supersonic) {
    $scope.username = null;
    $scope.showSpinner = true;

    // Fetch an object based on id from the database
    Username.find(steroids.view.params.id).then( function (username) {
      $scope.$apply(function() {
        $scope.username = username;
        $scope.showSpinner = false;
      });
    });

    $scope.submitForm = function() {
      $scope.showSpinner = true;
      $scope.username.save().then( function () {
        supersonic.ui.modal.hide();
      });
    }

    $scope.cancel = function () {
      supersonic.ui.modal.hide();
    }

  });
