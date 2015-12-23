var angular = require('angular');

var app = require('../app');

var REASONS = [
  'Unsanitary',
  'Incorrect',
  'Pest infestation',
  'Dangerous',
  'Other'
];

class Geolocation {
  /* @ngInject */
  constructor ($scope, $window) {
    var me = this;

    this.$scope = $scope;
    this.$window = $window;
    this.styles = require('./cmp.css');

    this.geolocation = null;
    this.markers = [];
    this.center = null;
    this.tiles = {
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
    };

    $scope.$watch(() => this.geolocation, (value) => {
      this.markers = [value];
      this.center = angular.extend({
        zoom: 16
      }, value);
    });
  }

  update () {
    this.getCurrentPosition()
      .then((location) => {
        const { latitude: lat, longitude: lng } = location;
        this.geolocation = { lat, lng };
        this.value = location;
        this.$scope.$digest();
      })
  }

  clear () {
    this.geolocation = null;
    this.markers = [];
    this.center = null;
    this.value = null;
  }

  getCurrentPosition () {
    return new Promise((resolve, reject) => {
      this.$window.navigator.geolocation.getCurrentPosition((position) => {
        resolve(position.coords);
      }, (err) => {
        console.log(err);
        reject(err);
      }, {
        enableHighAccuracy: true,
        maximumAge: 0,
        timeout: 5000
      });
    });
  }
}

app.component('geolocation', {
  bindings: {
    value: '='
  },
  controller: Geolocation,
  template: require('./tpl.html')
});
