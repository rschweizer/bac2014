function initialize() {

    var styles = [
    {
      stylers: [
        { hue: "#fbd7d6" },
        { saturation: 40 },
        { lightness: 0 }
      ]
    },{
	    "featureType": "road",
	    "stylers": [
	      { "visibility": "simplified" }
	    ]
	  }
  ];
  var styledMap = new google.maps.StyledMapType(styles, { name: "Styled Map" });

  var myLatlng = new google.maps.LatLng(47.7806,9.61510);
  var myOptions = {
    zoom: 16,
    center: myLatlng,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    panControl: false,
    zoomControl: true,
    scaleControl: false,
    streetViewControl: false,
    scrollwheel: false,
    navigationControl: false,
    mapTypeControl: false
  }

  var map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
  map.mapTypes.set('map_style', styledMap);
  map.setMapTypeId('map_style');


  var myIcon = new google.maps.MarkerImage("../assets/images/marker-icon.png", null, null, null, new google.maps.Size(47,43));

	var marker = new google.maps.Marker({
		position: myLatlng,
		map: map,
		flat: true,
		title: 'Nackt in Ravensburg',
		icon: myIcon
	});
}

initialize();
