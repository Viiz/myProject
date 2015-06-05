angular
  .module('username')
  .controller("IndexController", function ($scope, Username, supersonic) {
    $scope.usernames = null;
    $scope.showSpinner = true;

    Username.all().whenChanged( function (usernames) {
        $scope.$apply( function () {
          $scope.usernames = usernames;
          $scope.showSpinner = false;
        });
    });
  });