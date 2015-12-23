var app = require('../app');

var REASONS = [
  'Unsanitary',
  'Incorrect',
  'Pest infestation',
  'Dangerous',
  'Other'
];

app.component('failInput', {
  bindings: {
    value: '='
  },
  controller: /* @ngInject */ function ($scope) {
    var me = this;

    this.styles = require('./cmp.css');
    this.reasons = REASONS;
    if (this.reasons.indexOf(this.value) === -1) {
      this.other = this.value;
      this.select = 'Other';
    } else {
      this.select = this.value;
      this.other = '';
    }

    $scope.$watch(function () {
      return (me.select == "Other" && me.other) || me.select;
    }, function (value) {
      me.value = value;
    });
  },
  template: require('./tpl.html')
});
