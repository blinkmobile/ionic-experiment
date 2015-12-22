var app = require('../app');

require('../inspection-item/cmp');
require('../inspections/fltr');

app.component('inspectionsList', {
  bindings: {
    inspections: '=',
    search: '=',
    status: '='
  },
  template: require('./tpl.html')
});
