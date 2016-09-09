app.controller("mainController", function($scope, $http){

	// set default scope variables
	$scope.data = $scope.img = $scope.loc = $scope.status = null;

	// hide ajax loader image on page load
	$scope.loader = false;

	// process the following code when the form is submitted
	$scope.submit = function() {

		// display ajax loader image
		$scope.loader = true;

		// reset status code
		$scope.status = null;

		// fire ajax request to get weather report for selected location
		$http.jsonp('http://api.openweathermap.org/data/2.5/weather?q=' + $scope.loc + '&APPID=94ab2b078838978281e8eec174615678' + '&callback=JSON_CALLBACK')

			// the ajax request was successful
			.success(function(data, status) {

				// store request data in scope
				$scope.data = data;

				// store status code in scope
				$scope.status = status;

				// the selected location was found
				if(data.cod == 200) {

					// build image url
					$scope.img = 'http://openweathermap.org/img/w/' + data.weather[0]['icon'] + '.png';

				// the selected location was not found
				} else {

					// set error message
					$scope.data.message = 'Sorry, \'' + $scope.loc + '\' could not be found.';

				}

				// hide ajax loader image
				$scope.loader = false;
			})

			// the ajax request failed
			.error(function(data, status) {
				// set error message
				$scope.data = 'Oops! The request failed.';

				// store status code in scope
				$scope.status = status;

				// hide ajax loader image
				$scope.loader = false;
			});
	}

});
