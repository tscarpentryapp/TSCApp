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
    ['Kemah Board Walk (Houston, Texas)', 29.5461957, -95.0177693, 4],
    ['Waldameer And Water World (Erie, Pennsylvania)', 42.1096702, -80.1561363, 5],
    ['Adventureland (Altoona, Iowa)', 41.6506670, -93.5031207, 3],
    ['Alabama Adventure & Splash Adventure (Alabama)', 33.3792194, -86.9968425, 2],
    ['Funtown Splashtown, (Maine)', 43.5301831, -70.4304971, 1],
    ['Seabreeze Amusement Park, (Rochester, Nueva York)', 43.229411, -77.543473, 6]
  ];

  const map = new window.google.maps.Map(document.getElementById('map'), {
    zoom: 3.8,
    center: new window.google.maps.LatLng(36.92, -84.25),
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
    loadGoogleMapsScript('AIzaSyBN-7bCv17Bf9_KO47_VitgN_Iqr28g7g4', initMap);
  }, []);

  return (
    <>
      <div id="map" />
      <style jsx>{`
        #map
        {
            width: 100%;
            height: 400px;
            border: none;
            color: var(--tsc-color);
        }
      `}</style>
    </>
  )
}
