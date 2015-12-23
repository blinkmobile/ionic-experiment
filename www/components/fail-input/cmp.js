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
  controller: function () {
    this.styles = require('./cmp.css');
    this.reasons = REASONS;
    if (this.reasons.indexOf(this.value) === -1) {
      this.other = this.value;
      this.select = 'Other';
    } else {
      this.select = this.value;
      this.other = '';
    }
  },
  template: require('./tpl.html')
});
