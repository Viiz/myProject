angular
  .module('accelerometer')
  .controller('IndexController', function($scope, supersonic) {

	//Watch Accelerometer constantly
	$scope.acceleration = undefined;
	
	var options = {
	  frequency: 250
	}
	function watchAccelerator()
	{
		
	supersonic.device.accelerometer.watchAcceleration(options).onValue(function(acceleration) {
	  $scope.acceleration = acceleration;
	  supersonic.logger.log(
		"Acceleration X: " + acceleration.x + "\n" +
		"Acceleration Y: " + acceleration.y + "\n" +
		"Acceleration Z: " + acceleration.z + "\n" +
		"Timestamp: " + acceleration.timestamp
	  );
	});	
	}
  });
