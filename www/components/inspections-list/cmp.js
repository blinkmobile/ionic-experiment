var app = require('../app');

require('../inspection-item/cmp');
require('../inspections/fltr');

app.component('inspectionsList', {
  bindings: {
    inspections: '=',
    search: '=',
    status: '='
  },
  controller: function () {
    this.styles = require('./cmp.css');
  },
  template: require('./tpl.html')
});
