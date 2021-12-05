let map;

let script = document.createElement('script');
script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyBdlBISQNjiqyJI6t1LnwpXodN5gmfCmCA&callback=initMap';
script.async = true;

let stylesArray = [{
		"featureType": "administrative",
		"elementType": "labels.text.fill",
		"stylers": [{
				"gamma": "1.42"
			},
			{
				"lightness": "11"
			},
			{
				"saturation": "-100"
			}
		]
	},
	{
		"featureType": "administrative",
		"elementType": "labels.text.stroke",
		"stylers": [{
			"visibility": "off"
		}]
	},
	{
		"featureType": "administrative.country",
		"elementType": "geometry.stroke",
		"stylers": [{
				"lightness": -5
			},
			{
				"color": "#b0b0b0"
			},
			{
				"weight": 1.7
			}
		]
	},
	{
		"featureType": "administrative.country",
		"elementType": "labels.text.stroke",
		"stylers": [{
			"visibility": "off"
		}]
	},
	{
		"featureType": "administrative.province",
		"elementType": "all",
		"stylers": [{
			"visibility": "off"
		}]
	},
	{
		"featureType": "landscape",
		"elementType": "geometry",
		"stylers": [{
				"hue": "#ff0000"
			},
			{
				"lightness": "0"
			},
			{
				"saturation": "70"
			}
		]
	},
	{
		"featureType": "poi",
		"elementType": "geometry",
		"stylers": [{
			"color": "#FFB3B3"
		}]
	},
	{
		"featureType": "poi",
		"elementType": "labels.text.stroke",
		"stylers": [{
			"visibility": "off"
		}]
	},
	{
		"featureType": "road",
		"elementType": "labels.text.stroke",
		"stylers": [{
			"visibility": "off"
		}]
	},
	{
		"featureType": "road.highway",
		"elementType": "all",
		"stylers": [{
			"color": "#FFB3B3"
		}]
	},
	{
		"featureType": "road.arterial",
		"elementType": "all",
		"stylers": [{
				"visibility": "on"
			},
			{
				"color": "#ffb3b3"
			}
		]
	},
	{
		"featureType": "road.local",
		"elementType": "all",
		"stylers": [{
			"visibility": "off"
		}]
	},
	{
		"featureType": "transit",
		"elementType": "all",
		"stylers": [{
			"visibility": "off"
		}]
	},
	{
		"featureType": "transit",
		"elementType": "labels.text.stroke",
		"stylers": [{
			"visibility": "off"
		}]
	},
	{
		"featureType": "water",
		"elementType": "geometry",
		"stylers": [{
				"color": "#FFB3B3"
			},
			{
				"lightness": 66
			}
		]
	},
	{
		"featureType": "water",
		"elementType": "labels.text.stroke",
		"stylers": [{
			"visibility": "off"
		}]
	}
]

window.initMap = function () {
	map = new google.maps.Map(document.getElementById("map"), {
		center: {
			lat: 48.01123906472801,
			lng: -122.53606464599291
		},
		styles: stylesArray,
		zoom: 17,
	});
};

document.head.appendChild(script);

// initMap()