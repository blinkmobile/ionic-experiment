require('../inspections/svc');

module.exports = /* @ngInject */ function InspectionsMapCtrl (InspectionsSvc) {
  this.markers = InspectionsSvc.inspections.map(function (inspection) {
    var latlong = inspection.latlong.split(',');
    return {
      alt: inspection.business,
      lat: parseFloat(latlong[0], 10),
      lng: parseFloat(latlong[1], 10),
      draggable: false,
      title: inspection.business
    };
  });

  this.center = angular.extend({
    zoom: 10
  }, (function (locations) {
    var sum = locations.reduce(function (s, location) {
      s.lat += location.lat;
      s.lng += location.lng;
      return s;
    }, { lat: 0, lng: 0 });

    return {
      lat: sum.lat / locations.length,
      lng: sum.lng / locations.length
    };
  }(this.markers)));

  this.tiles = {
    url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
  };
}

module.exports.tpl = require('./tpl.html');
