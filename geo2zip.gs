function geo2zip(a) {
  var response=Maps.newGeocoder()
    .reverseGeocode(lat(a),long(a));
  return response.results[0].formatted_address.split(',')[2].trim().split(' ')[1];
}
function lat(pointa) {
 var response = Maps.newGeocoder()
     .geocode(pointa);
  return response.results[0].geometry.location.lat
}
function long(pointa) {
  var response = Maps.newGeocoder()
     .geocode(pointa);
  return response.results[0].geometry.location.lng
}
