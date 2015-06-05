angular
  .module('accelerometer')
  .controller('IndexController', function($scope, supersonic) {

	//Watch Accelerometer constantly
	$scope.acceleration = undefined;
	var bottomCheck = false;
	var topCheck = false;
	var leftCheck = false;
	var rightCheck = false;
	
	var options = {
	  frequency: 50
	}
	supersonic.device.accelerometer.watchAcceleration(options).onValue(function(acceleration) {
	  $scope.acceleration = acceleration;
	  supersonic.logger.log(
		"Acceleration X: " + acceleration.x + "\n" +
		"Acceleration Y: " + acceleration.y + "\n" +
		"Acceleration Z: " + acceleration.z + "\n" +
		"Timestamp: " + acceleration.timestamp
	  );
	  
	  //ACCEPT
	  if(acceleration.y < -3.5 && acceleration.z > -4 && acceleration.z < 4 && acceleration.x > 7)
	  {
		  bottomCheck = true;
	  }
	  
	  if(bottomCheck == true)
	  {
		if(acceleration.y > 2 && acceleration.z > -4 && acceleration.z < 4 && acceleration.x > 7)
		{
			topCheck = true;
		}
	  }
	  
	  if(bottomCheck == true && topCheck == true)
	  {
		  alert('Accepted!');
		  bottomCheck = false;
		  topCheck = false;
	  }
	  
	  //DECLINE
	  if(acceleration.x > 4 && acceleration.y > -1 && acceleration.z > 5)
	  {
		  leftCheck = true;
	  }
	  
	  if(leftCheck == true)
	  {
		if(acceleration.x < -3 && acceleration.y > -1 && acceleration.z > 5)
		{
			rightCheck = true;
		}
	  }
	  
	  if(leftCheck == true && rightCheck == true)
	  {
		  alert('Declined!');
		  leftCheck = false;
		  rightCheck = false;
	  }
	});	
  });
