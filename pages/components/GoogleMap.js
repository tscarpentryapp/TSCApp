import { useEffect } from 'react';

function loadGoogleMapsScript(apiKey, callback) {
  if (!window.google) {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=initMap`;
    script.async = true;
    script.defer = true;
    script.onload = callback;
    document.head.appendChild(script);
  } else {
    callback();
  }
}

function initMap() {
  const locations = [
    ['Bondi Beach', -33.890542, 151.274856, 4],
    ['Coogee Beach', -33.923036, 151.259052, 5],
    ['Cronulla Beach', -34.028249, 151.157507, 3],
    ['Manly Beach', -33.80010128657071, 151.28747820854187, 2],
    ['Maroubra Beach', -33.950198, 151.259302, 1]
  ];

  const map = new window.google.maps.Map(document.getElementById('map'), {
    zoom: 10,
    center: new window.google.maps.LatLng(-33.92, 151.25),
    mapTypeId: window.google.maps.MapTypeId.ROADMAP
  });

  const infowindow = new window.google.maps.InfoWindow();

  let marker, i;

  for (i = 0; i < locations.length; i++) {
    marker = new window.google.maps.Marker({
      position: new window.google.maps.LatLng(locations[i][1], locations[i][2]),
      map: map
    });

    window.google.maps.event.addListener(marker, 'click', (function (marker, i) {
      return function () {
        infowindow.setContent(locations[i][0]);
        infowindow.open(map, marker);
      }
    })(marker, i));
  }
}

export default function Map() {
  useEffect(() => {
    loadGoogleMapsScript('AIzaSyB4JW3oq-C_CuTIYy_3SfEFnPiZ5HiiIIQ', initMap);
  }, []);

  return <div id="map" style={{ width: '100%', height: '500px' }} />;
}
