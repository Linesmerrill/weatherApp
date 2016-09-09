var app = angular.module('WeatherApp',[])

	// filter to convert epoch time to a human friendly time
	.filter('customTimeFilter', function () {
        return function (epochTime) {
			var d = new Date(0);
			d.setUTCSeconds(epochTime);
			var hours = prependZeros(d.getHours(), 2);
			var minutes = prependZeros(d.getMinutes(), 2);
            return hours + ':' + minutes + ' GMT';
        };
    })

	// filter to convert temperature in kelvin to celsius
	.filter('customKelvinToFahrenheitFilter', function () {
        return function (n) {
            return n * 9/5 - 459.67;
        };
    });

		// filter to convert direction degree to cardinal direction
	// .filter('customDegreeToCardinalFilter', function () {
	// 		return function (deg) {
	// 			if(deg > 337 || deg < 22) {return 'N';}
	// 			else if(deg > 22 && deg < 67) {return 'NE';}
	// 			else if(deg > 67 && deg < 112) {return 'E';}
	// 			else if(deg > 112 && deg < 157) {return 'SE';}
	// 			else if(deg > 157 && deg < 202) {return 'S';}
	// 			else if(deg > 202 && deg < 247) {return 'SW';}
	// 			else if(deg > 247 && deg < 292) {return 'W';}
	// 			else if(deg > 292 && deg < 337) {return 'NW';}
	// 		};
	// 	});

/**
 * I prepend zeros to a number
 * @param integer n
 * @param integer len
 * @return string
 */
function prependZeros(n, len) {
  return (new Array(len + 1).join('0') + n).slice(-len);
}
