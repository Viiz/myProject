angular
  .module('geolocation')
  .controller('IndexController', function($scope, supersonic) {
    // Controller functionality here
	
	//Alert sturen met een bericht
    //$scope.getPosition = function() {
    //  supersonic.ui.dialog.alert("Interstellar!");
    //};
	$scope.position = undefined;

	$scope.getPosition = function() {
  	supersonic.device.geolocation.getPosition().then( function(position){
    $scope.position = position;
 	 });
	};
	
  });