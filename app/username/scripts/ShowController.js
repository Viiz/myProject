angular
  .module('username')
  .controller("ShowController", function ($scope, Username, supersonic) {
    $scope.username = null;
    $scope.showSpinner = true;
    $scope.dataId = undefined;

    var _refreshViewData = function () {
      Username.find($scope.dataId).then( function (username) {
        $scope.$apply( function () {
          $scope.username = username;
          $scope.showSpinner = false;
        });
      });
    }

    supersonic.ui.views.current.whenVisible( function () {
      if ( $scope.dataId ) {
        _refreshViewData();
      }
    });

    supersonic.ui.views.current.params.onValue( function (values) {
      $scope.dataId = values.id;
      _refreshViewData();
    });

    $scope.remove = function (id) {
      $scope.showSpinner = true;
      $scope.username.delete().then( function () {
        supersonic.ui.layers.pop();
      });
    }
  });