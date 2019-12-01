// Initialize and add the map
function initMap() {
  // Your location
  const loc = {lat: 23.684994, lng: 90.356331};
  // Centered map on location
  const map = new google.maps.Map(document.querySelector('.map'), {
    zoom: 18,
    center: loc
  });
  // The marker, positioned at location
  const marker = new google.maps.Marker({ position: loc, map: map });
}

